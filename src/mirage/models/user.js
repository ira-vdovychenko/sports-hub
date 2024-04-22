import { Model, hasMany } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export default Model.extend({
  UserID: uuidv4(),
  UserName: '',
  RoleID: '',
  FirstName: '',
  LastName: '',
  Email: '',
  EncryptedPassword: '',
  roles: hasMany(),

});


