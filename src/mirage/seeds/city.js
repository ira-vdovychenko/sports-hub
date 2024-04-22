import { v4 as uuidv4 } from 'uuid';

export function createCities(server) {
  
  let utah = server.schema.states.findBy({ StateName: 'Utah' });
  server.create('city', { CityID: uuidv4(), CityName: 'Salt Lake City', state: utah });
 
  let tennessee =  server.schema.states.findBy({ StateName: 'Tennessee' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Memphis', state: tennessee });
  
  let texas = server.schema.states.findBy({ StateName: 'Texas' }); 
  server.create('city', { CityID: uuidv4(),  CityName: 'Houston', state: texas });
  server.create('city', { CityID: uuidv4(),  CityName: 'San Antonio', state: texas });
 
  let california = server.schema.states.findBy({ StateName: 'California' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Los Angeles', state: california }); 
  
  let massachusetts = server.schema.states.findBy({ StateName: 'Massachusetts' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Boston', state: massachusetts }); 
  server.create('city', { CityID: uuidv4(),  CityName: 'Foxborough', state: massachusetts }); 
  
  let illinois = server.schema.states.findBy({ StateName: 'Illinois' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Chicago', state: illinois }); 

  let georgia = server.schema.states.findBy({ StateName: 'Georgia' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Atlanta', state: georgia }); 

  let columbia = server.schema.states.findBy({ StateName: 'District of Columbia' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Washington, D.C.', state: columbia }); 

  let navada = server.schema.states.findBy({ StateName: 'Nevada' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Las Vegas', state: navada }); 

  let newyork = server.schema.states.findBy({ StateName: 'New York' });
  server.create('city', { CityID: uuidv4(),  CityName: 'Buffalo', state: newyork }); 
}

