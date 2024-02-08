const { default: axios } = require("axios");

export const instance = axios.create({
  baseURL: "https://travel-hunter-server.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
