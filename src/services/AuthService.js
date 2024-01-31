export const checkEmailExists = async (email) => {
  try {
    const response = await fetch('/api/check-email', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error ('Failed to check email existence.' );
    }

    const responseData = await response.json();

    if (responseData.emailExists) {
      throw new Error ('The user with this email already exists in the system.' );
    }

    return responseData.emailExists;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (userData) => {
  try {
    const registrationResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!registrationResponse.ok) {
      throw new Error  ('Failed to register.');
    }

    const registrationResult = await registrationResponse.json();

    return { success: true, data: registrationResult };
    } catch (error) {
      return error;
    }
};

export const logInUser = async (userData) => {
  try {
     if (!userData.Email || !userData.EncryptedPassword) {
      throw new Error('Email and password are required.');
    } 

    const loginResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!loginResponse.ok) {
      throw new Error('Failed to log in.');
    }

    const loginResult = await loginResponse.json();

    return { success: true, data: loginResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
};


export const authenticateUserWithToken = async (token) => {
  try {
    const response = await fetch('/api/authenticate-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate user with token.');
    }

    const responseData = await response.json();

    return responseData.user;
  } catch (error) {
    throw error;
  }
};






