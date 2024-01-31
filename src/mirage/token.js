const generateToken = (UserID) => {
  const expiresInMilliseconds = 60 * 60 * 1000; 
  const payload = {
    UserID,
    expiresIn: Date.now() + expiresInMilliseconds,
  };

  const token = btoa(JSON.stringify(payload));
  console.log('Generated Token:', token);
  return token;
};


const verifyToken = (token) => {
  try {
    const decodedPayload = JSON.parse(atob(token));
    const { UserID, expiresIn } = decodedPayload;

    if (Date.now() > expiresIn) {
      throw new Error('Token has expired');
    }

    return { UserID };
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export { generateToken, verifyToken };
