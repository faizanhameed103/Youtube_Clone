import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "AIzaSyAXA3OY1TPCrLO7KKxaCoOeQD4VE3SU55Y",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
