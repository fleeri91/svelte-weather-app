/** DOCS */
"https://opendata.smhi.se/apidocs/metfcst/index.html";

import axios from "axios";

const SMHI_API_URL = "https://opendata-download-metfcst.smhi.se/api/";

export const getWeatherByLocation = (lon: string, lat: string) => {
  let url = `category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;

  return axios
    .get(SMHI_API_URL + url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    })
    .finally(() => {
      console.log("Fetch completed.");
    });
};
