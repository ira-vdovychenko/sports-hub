import { Model, hasMany } from 'miragejs'

export const State = Model.extend({
    cities: hasMany(),
  });