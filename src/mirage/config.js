import { Server, Model, hasMany, belongsTo } from "miragejs";
import { Response } from "miragejs";
import { createSports } from "./seeds/sport.js";
import { createLeagues } from "./seeds/league.js";
import { createTeams } from "./seeds/team.js";
import { createLocations } from "./seeds/location.js";
import { createCountries } from "./seeds/country.js";
import { createStates } from "./seeds/state.js";
import { createCities } from "./seeds/city.js";
import { v4 as uuidv4 } from "uuid";

export default function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      sport: Model.extend({
        leagues: hasMany(),
        user: belongsTo(),
      }),
      league: Model.extend({
        teams: hasMany(),
        sport: belongsTo(),
        user: belongsTo(),
      }),
      team: Model.extend({
        leagues: belongsTo(),
        sport: belongsTo(),
        location: belongsTo(),
        user: belongsTo(),
      }),
      user: Model.extend({
        roles: hasMany(),
        sports: hasMany(),
        leagues: hasMany(),
        teams: hasMany(),
      }),
      role: Model.extend({}),
      country: Model.extend({
        states: hasMany(),
        cities: hasMany(),
        locations: hasMany(),
      }),
      state: Model.extend({
        cities: hasMany(),
        country: belongsTo(),
      }),
      city: Model.extend({
        locations: hasMany(),
        state: belongsTo(),
      }),
      location: Model.extend({
        teams: hasMany(),
        city: belongsTo(),
      }),
    },

    seeds(server) {
      createCountries(server);
      createStates(server);
      createCities(server);
      createLocations(server);

      const sports = createSports(server);
      sports.forEach((sport) => {
        createLeagues(server, sport);
      }); 
      createTeams(server);

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

      server.create("user", {
        UserID: uuidv4(),
        UserName: "Brandon Miles",
        RoleID: adminRole.RoleID,
        FirstName: "Brandon",
        LastName: "Miles",
        Email: "admin@example.com",
        EncryptedPassword: 'potyrds567',
        roles: [adminRole],
       /*  sports: createSports(server), */
      });
      
      server.create("user", {
        UserID: uuidv4(),
        UserName: "Ivan Baloh",
        RoleID: userRole.RoleID,
        FirstName: "Ivan",
        LastName: "Baloh",
        Email: "user@example.com",
        EncryptedPassword: "password000",
        roles: [userRole],
      });

      server.create("user", {
        UserID: uuidv4(),
        UserName: "Ira Vdov",
        RoleID: userRole.RoleID,
        FirstName: "Ira",
        LastName: "Vdov",
        Email: "vdovychenko.ire@gmail.com",
        EncryptedPassword: "mgfhfjjd123",
        roles: [userRole],
      });
      
    },
    
    routes() {
      this.namespace = "/mirage-api";

      this.passthrough((request) => {
        return request.url.startsWith("https://api.mapbox.com/");
      });
      this.passthrough((request) => {
        return request.url.startsWith("https://events.mapbox.com/");
      });
      this.passthrough((request) => {
        return request.url === "http://localhost:8080/api/send-email";
      });

      this.passthrough((request) => {
        return request.url === "http://localhost:8080/api/get-token";
      });

      this.passthrough((request) => {
        return request.url === "http://localhost:8080/api/refresh-token";
      });

      this.passthrough((request) => {
        return request.url === "http://localhost:8080/api/verify-token";
      });

      this.passthrough((request) => {
        return request.url === "http://localhost:8080/api/logout";
      });

      this.get("/sports", (schema) => {
        return schema.sports.all();
      }); 

      this.post("/sports", (schema, request) => {
        const newData = JSON.parse(request.requestBody);
        return schema.create("sport", newData).attrs;
      });

      /* this.get("/sports", (schema, request) => {
        const token = request.requestHeaders.Authorization;
        console.log(token);

        if (token && token !== "Bearer null") {
            try {
                const decodedToken = jwtDecode(token);
                const userEmail = decodedToken.Email;
                const user = schema.users.findBy({ Email: userEmail });
                
                if (user) {
                    const sportIds = user.sportIds;
                    const userSports = schema.sports.where((sport) => sportIds.includes(sport.id));
                    return userSports;
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                return [];
            }
        }
        
        const allSports = schema.sports.all();
        const userSportsIds = schema.users.all().models.map(user => user.sportIds).flat();
        const filteredSports = allSports.filter(sport => !userSportsIds.includes(sport.id));
        return filteredSports;
      }); */

      this.put("/sports/:SportID", (schema, request) => {
        const id = request.params.SportID;
        const updatedData = JSON.parse(request.requestBody);
        const updatedSport = schema.sports
          .where({ SportID: id })
          .update(updatedData);
        return updatedSport;
      }); 

/*       this.put("/sports/:SportID", (schema, request) => {
        const token = request.requestHeaders.Authorization;
        console.log(token);
      
        if (!token) {
          return new Response(401, { "Content-Type": "application/json" }, { error: "Unauthorized" });
        }
        const id = request.params.SportID;
 
        const updatedData = JSON.parse(request.requestBody);
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.Email;
        console.log(userEmail)
        const user = schema.users.findBy({ Email: userEmail });
        console.log(user)
        
        if (!user) {
          return new Response(401, { "Content-Type": "application/json" }, { error: "Unauthorized" });
        }
        const category = schema.sports.findBy({ SportID: id });
      
        if (!category || category.userId !== user.id) {
          return new Response(403, { "Content-Type": "application/json" }, { error: "Forbidden" });
        }
        const updatedSport = schema.sports.where({ SportID: id }).update(updatedData);
        return updatedSport; 
      }); */
      
      this.delete("/sports/:SportID", (schema, request) => {
        const id = request.params.SportID;
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

      this.get("/all-teams", async (schema) => {
        const teams = schema.teams.all().models.map((team) => {
          return {
            TeamID: team.TeamID,
            TeamName: team.TeamName,
            LocationID: team.LocationID,
            LeagueID: team.LeagueID,
            SportID: team.SportID,
            logo: team.logo,
            date: team.date,
          };
        });

        return teams;
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

      this.delete("/teams/:TeamID", (schema, request) => {
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

      this.post("/check-user-email", (schema, request) => {
        const { email } = JSON.parse(request.requestBody);

        const existingUser = schema.users.findBy({ Email: email });

        if (!existingUser) {
          return new Response(
            400,
            { "Content-Type": "application/json" },
            { error: "User with this email not found." }
          );
        }

        return { email };
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
        return { user: { ...user.attrs, role } };
      }); 

/*       this.post("/login", async (schema, request) => {
        const { Email, EncryptedPassword } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ Email, EncryptedPassword });
      
        if (!user) {
          return new Response(
            401,
            { "Content-Type": "application/json" },
            { error: "Invalid email or password." }
          );
        }
      
        try {
          const expressResponse = await fetch("http://localhost:8080/api/get-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: Email }),
            credentials: 'include'
          });
      
          if (!expressResponse.ok) {
            throw new Error("Failed to get access token from Express server.");
          }
      
          const { accessToken } = await expressResponse.json();
          user.update({ accessToken });
          console.log(user);
          console.log(schema.users.all);
   
          const role = user.roles[1];
          return {
            user: { ...user.attrs, role },
            accessToken
          };
        } catch (error) {
          console.error("Error fetching access token from Express server:", error);
          return new Response(
            500,
            { "Content-Type": "application/json" },
            { error: "Internal server error." }
          );
        }
      }); */
      
      this.post("/change-password", (schema, request) => {
        const { newPassword, email } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ Email: email });

        if (!user) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: "User not found." }
          );
        }

        user.update({ EncryptedPassword: newPassword });

        return { success: true, message: "Password changed successfully." };
      });

      this.get("/users", (schema) => {
        return schema.users.all().models.map((user) => user.attrs);
      });

      this.get("/locations", (schema) => {
        return schema.locations.all();
      });
      
    },  
  });

  return server;
}
