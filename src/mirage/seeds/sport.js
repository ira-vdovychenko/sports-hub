import { v4 as uuidv4 } from 'uuid';

export  function createSports(server) {
  const sports = ['NBA', 'NFL', 'MLB', 'NHL', 'CBB', 'CFB', 'NASCAR', 'GOLF', 'SOCCER', 'MORE', 'LIFESTYLE', 'DEALBOOK', 'VIDEO'];
  
  return sports.map((sport) => {
    return server.create('sport', {
      SportID: uuidv4(),
      SportName: sport,
      isStatic: ['MORE', 'LIFESTYLE', 'DEALBOOK', 'VIDEO'].includes(sport),
      
    });
  });
};

