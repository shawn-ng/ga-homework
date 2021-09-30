import axios from "axios";

export const getAllMovies = async () => {
  const options = { method: "Get", url: `/api/movies/` };

  const response = await axios.request(options);

  return response.data;
};

export const searchForMovies = async (q) => {
  const options = {
    method: "GET",
    url: "/api/search",
    params: {
      q,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
