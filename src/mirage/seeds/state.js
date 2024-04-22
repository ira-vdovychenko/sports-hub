import { v4 as uuidv4 } from 'uuid';

export function createStates(server) {
  let usa = server.schema.countries.findBy({ CountryName: 'United States' });
    server.create('state', { StateID: uuidv4(), StateName: 'Utah', country: usa });
    server.create('state', { StateID: uuidv4(), StateName: 'Tennessee', country: usa });
    server.create('state', { StateID: uuidv4(), StateName: 'Texas', country: usa });
    server.create('state', { StateID: uuidv4(), StateName: 'California', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'Massachusetts', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'Illinois', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'Georgia', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'District of Columbia', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'Nevada', country: usa }); 
    server.create('state', { StateID: uuidv4(), StateName: 'New York', country: usa }); 
}
