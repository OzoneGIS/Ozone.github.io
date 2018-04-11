import from 'axios';

const BASE_URL = "http://localhost:50000";

export {getFoodData, getCelebrityData};

function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/joke/celebrity`;
  return axios.get(url).then(response => response.data);
}
