import axios from "axios";

// Create a new instance of Axios
const axiosInstance = axios.create();

// Define the API connector function
export const apiConnector = async (method, url, bodyData = null, headers = {}, params = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });
    return response;
  } catch (error) {
    throw error;
  }
};