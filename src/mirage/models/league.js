import { Model, hasMany, belongsTo } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export default Model.extend({
  LeagueID: {
    serialize: true,
    defaultValue: () => uuidv4(),
  },
  LeagueName: '',
  SportID: {
    serialize: true,
  },
  LanguageID: '',
  isHidden: false,
  sport: belongsTo(),
  teams: hasMany(),
});


