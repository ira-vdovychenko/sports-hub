import { v4 as uuidv4 } from 'uuid';

export function createCountries(server) {
    server.create('country', { CountryID: uuidv4(), CountryName: 'United States' });
  }