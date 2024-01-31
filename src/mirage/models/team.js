import { Model, belongsTo } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export default Model.extend({
  TeamID: {
    defaultValue: () => uuidv4(),
  },
  TeamName: '',
  LeagueID: {},
  SportID: {},
  league: belongsTo(),
  sport: belongsTo(),
});



