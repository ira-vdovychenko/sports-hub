export const checkEmailExists = async (email) => {
  try {
    const response = await fetch("/mirage-api/check-email", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to check email existence.");
    }

    const responseData = await response.json();

    return responseData.emailExists;
  } catch (error) {
    console.error("Error in checkEmailExists:", error);
    return false;
  }
};

export const registerUser = async (userData) => {
  try {
    const registrationResponse = await fetch("/mirage-api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!registrationResponse.ok) {
      throw new Error("Failed to register.");
    }

    const registrationResult = await registrationResponse.json();

    return { success: true, data: registrationResult };
  } catch (error) {
    return error;
  }
};

export const logInUserMirage = async (userData) => {
  try {
    if (!userData.Email || !userData.EncryptedPassword) {
      throw new Error("Email and password are required.");
    }

    const loginResponse = await fetch("/mirage-api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!loginResponse.ok) {
      throw new Error("Failed to log in.");
    }

    const loginResult = await loginResponse.json();

    return { success: true, data: loginResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const changePassword = async (email, newPassword) => {
  try {
    const response = await fetch("/mirage-api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });

    if (!response.ok) {
      throw new Error("Failed to change password.");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error changing password:", error);
    return { success: false, error: error.message };
  }
};

export const getToken = async (userEmail) => {
  try {
    const serverResponse = await fetch("http://localhost:8080/api/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
      credentials: 'include'
    });

    if (!serverResponse.ok) {
      throw new Error("Failed to log in.");
    }

    const tokenResult = await serverResponse.json();

    return { success: true, data: tokenResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const refreshToken = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      return data.accessToken;
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export const verifyToken = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/verify-token", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to verify token.");
    }

    const responseData = await response.json();

    if (responseData.user) {
      return { success: true, data: responseData };
    } else {
      throw new Error("User data not found in token verification response.");
    }
  } catch (error) {
    console.error("Error in verifyToken:", error);
    return { success: false, error: error.message };
  }
};

export const checkUserEmail = async (email) => {
  try {
    const response = await fetch("/mirage-api/check-user-email", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to check email existence.");
    }

    const responseData = await response.json();

    return responseData.email;
  } catch (error) {
    console.error("Error in checkEmailExists:", error);
    return null;
  }
};

export const sendEmail = async ({ email }) => {
  try {
    const response = await fetch("http://localhost:8080/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email on the server.");
    }

    const serverResponse = await response.json();

    return serverResponse;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    return { success: false, error: error.message };
  }
};

export const removeToken = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    if (response.ok) {
      return true;
    } else {
      throw new Error('Failed to logout');
    }
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
