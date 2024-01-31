import { createServer, Model, hasMany, belongsTo } from "miragejs";
import { generateToken, verifyToken } from "./token";
import { Response } from "miragejs";
import createSports from "./seeds/sport";
import createLeagues from "./seeds/league";
import createTeams from "./seeds/team";
import { v4 as uuidv4 } from "uuid";

export default function serverSetup() {
  if (process.env.NODE_ENV === "development") {
    const server = createServer({
      models: {
        sport: Model.extend({
          leagues: hasMany(),
        }),

        league: Model.extend({
          teams: hasMany(),
          sport: belongsTo(),
        }),

        team: Model.extend({
          leagues: belongsTo(),
          sport: belongsTo(),
        }),

        User: Model.extend({
          roles: hasMany(),
        }),

        role: Model.extend({}),
      },

      seeds(server) {
        const adminRole = server.create("role", {
          RoleID: 1,
          RoleName: "admin",
          RoleDescription: "Administrator",
        });
        const userRole = server.create("role", {
          RoleID: 2,
          RoleName: "user",
          RoleDescription: "Regular User",
        });

        server.create("User", {
          UserID: uuidv4(),
          UserName: "Brandon Miles",
          RoleID: adminRole.RoleID,
          FirstName: "Brandon",
          LastName: "Miles",
          Email: "admin@example.com",
          EncryptedPassword: "password111",
          roles: [adminRole],
        });

        server.create("User", {
          UserID: uuidv4(),
          UserName: "Ivan Baloh",
          RoleID: userRole.RoleID,
          FirstName: "Ivan",
          LastName: "Baloh",
          Email: "user@example.com",
          EncryptedPassword: "password000",
          roles: [userRole],
        });
      },

      routes() {
        this.namespace = "/api";

        this.get("/sports", (schema) => {
          return schema.sports.all();
        });

        this.post("/sports", (schema, request) => {
          const newData = JSON.parse(request.requestBody);
          return schema.create("sport", newData).attrs;
        });

        this.put("/sports/:SportID", (schema, request) => {
          const id = request.params.SportID;
          const updatedData = JSON.parse(request.requestBody);
          const updatedSport = schema.sports
            .where({ SportID: id })
            .update(updatedData);
          return updatedSport;
        });

        this.delete("/sports/:SportID", (schema, request) => {
          const id = request.params.SportID;
          console.log("Deleting category with ID:", id);
          const category = schema.sports.where({ SportID: id });
          if (!category) {
            return new Response(404, {}, { error: "Category not found" });
          }
          category.destroy();
          return new Response(204);
        });

        this.get("/leagues", (schema) => {
          return schema.leagues.all();
        });

        this.get("/leagues/:SportID", (schema, request) => {
          const sportID = request.params.SportID;
          const leagues = schema.leagues.where({ SportID: sportID });
          return { leagues };
        });

        this.post("/leagues", (schema, request) => {
          const newData = JSON.parse(request.requestBody);
          return schema.create("league", newData).attrs;
        });

        this.put("/leagues/:LeagueID", (schema, request) => {
          const id = request.params.LeagueID;
          const updatedData = JSON.parse(request.requestBody);
          const updatedLeague = schema.leagues
            .where({ LeagueID: id })
            .update(updatedData);
          return updatedLeague;
        });

        this.delete("/leagues/:LeagueID", (schema, request) => {
          const id = request.params.LeagueID;
          const league = schema.leagues.where({ LeagueID: id });
          if (!league) {
            return new Response(404, {}, { error: "Subcategory not found" });
          }
          league.destroy();
          return new Response(204);
        });

        this.get("/teams", (schema) => {
          return schema.teams.all();
        });

        this.get("/teams/:LeagueID", (schema, request) => {
          const leagueID = request.params.LeagueID;
          const teams = schema.teams.where({ LeagueID: leagueID });
          return { teams };
        });

        this.post("/teams", (schema, request) => {
          const newData = JSON.parse(request.requestBody);
          const newId = uuidv4();
          newData.TeamID = newId;
          const newTeam = schema.create("team", newData);
          return newTeam.attrs;
        });

        this.put("/teams/:TeamID", (schema, request) => {
          const id = request.params.TeamID;
          const updatedData = JSON.parse(request.requestBody);
          const updatedTeam = schema.teams
            .where({ TeamID: id })
            .update(updatedData);
          return updatedTeam;
        });

        this.delete("/teams/:TeamId", (schema, request) => {
          const id = request.params.TeamID;
          const teams = schema.teams.where({ TeamID: id });
          if (!teams) {
            return new Response(404, {}, { error: "Team not found" });
          }
          teams.destroy();
          return new Response(204);
        });

        this.post("/check-email", (schema, request) => {
          const { email } = JSON.parse(request.requestBody);

          const existingUser = schema.users.findBy({ Email: email });

          if (existingUser) {
            return new Response(
              400,
              { "Content-Type": "application/json" },
              { error: "User with this email already exists." }
            );
          }

          return { emailExists: false };
        });

        this.post("/register", (schema, request) => {
          const userData = JSON.parse(request.requestBody);

          const existingUser = schema.users.findBy({ Email: userData.Email });

          if (existingUser) {
            return new Response(
              400,
              { "Content-Type": "application/json" },
              { error: "User with this email already exists." }
            );
          }

          userData.UserID = uuidv4();

          const userRole = schema.create("role", {
            RoleID: 2,
            RoleName: "user",
            RoleDescription: "Regular User",
          });
          const newUserRole = schema.roles.find(userRole.RoleID);
          userData.RoleID = newUserRole.RoleID;
          userData.roles = [newUserRole];

          const newUser = schema.users.create(userData);

          return { user: newUser.attrs };
        });

        this.post("/login", (schema, request) => {
          console.log(request.requestBody);
          const { Email, EncryptedPassword } = JSON.parse(request.requestBody);
          const user = schema.users.findBy({ Email, EncryptedPassword });

          if (!user) {
            return new Response(
              401,
              { "Content-Type": "application/json" },
              { error: "Invalid email or password." }
            );
          }

          const role = user.roles[1];

          const token = generateToken(user.UserID);

          return { user: { ...user.attrs, role }, token };
        });

        this.post("/authenticate-user", (schema, request) => {
          console.log(
            "Authorization Header:",
            request.requestHeaders.Authorization
          );
          console.log("Request Body:", request.requestBody);

          const authorization = request.requestHeaders.Authorization;
          console.log("Received Token:", authorization);

          const [, token] = authorization.split("Bearer ");

          try {
            const decodedToken = verifyToken(token);
            console.log("Decoded Token:", decodedToken);

            // Перевірте, чи правильно відбувається порівняння UserID
            console.log("Type of UserID:", typeof decodedToken.UserID);

            const user = schema.users.findBy({ UserID: decodedToken.UserID });

            // Перевірте, чи знаходиться користувач в базі даних
            console.log("User:", user);

            return { user: user.attrs };
          } catch (error) {
            console.error("Error:", error.message);
            return new Response(401, {}, { error: "Invalid token" });
          }
        });

        this.get("/users", (schema) => {
          return schema.users.all().models.map((user) => user.attrs);
        });
      },
    });

    const sports = createSports(server);
    sports.forEach((sport) => {
      createLeagues(server, sport);
      const leagues = server.db.leagues.where({ SportID: sport.SportID });
      leagues.forEach((league) => {
        createTeams(server, league, sport);
      });
    });

    return server;
  } else {
    return null;
  }
}
