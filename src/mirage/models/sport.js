import { Model, belongsTo, hasMany } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export default Model.extend({
  SportID: {
    serialize: true,
    defaultValue: () => uuidv4(),
  },
  SportName: '',
  isStatic: false,
  isHidden: false,
  leagues: hasMany(),
  users: belongsTo(),
});







