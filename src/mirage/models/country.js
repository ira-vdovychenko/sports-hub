import { Model, hasMany } from 'miragejs'

export const Country = Model.extend({
    states: hasMany(),
  });