import instance from "../utils/request.js";

import config from "../utils/config.js";

export const signup = async (email, password, phoneNumber) => {
  try {
    const response = await instance.post(`${config.baseUrl}/auth/local/register`, {
      username: email,
      password,
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    // Handle errors
    throw error;
  }
};

export const login = async (email, password) => {
    try {
      const response = await instance.post(`${config.baseUrl}/auth/local`, {
        username: email,
        password,
        phoneNumber,
      });
      return response.data;
    } catch (error) {
      // Handle errors
      throw error;
    }
  };