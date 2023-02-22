import { API_KEY, API_URL } from "./settings";

const reponseGetGif = (response) => {
  const { data } = response;
  return data;
};

export default function getTrendingSearchTerms() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(reponseGetGif);
}
