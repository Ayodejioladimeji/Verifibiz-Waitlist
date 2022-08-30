import axios from "axios";

const endpoint = process.env.REACT_APP_API;

// THE POST DATA API
export const postDataAPI = async (url, data) => {
  const res = await axios.post(endpoint + url, data);
  return res;
};
