import { Model, hasMany } from 'miragejs'

export const City = Model.extend({
    locations: hasMany(),
  });