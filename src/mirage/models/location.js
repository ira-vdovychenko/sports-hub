import { Model, belongsTo, hasMany } from "miragejs";

export const Location = Model.extend({
  teams: hasMany(), 
  city: belongsTo(),
  state: belongsTo(),
  country: belongsTo(),
});
