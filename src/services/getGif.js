import { API_KEY, API_URL } from "./settings";

const reponseGetGif = (response) => {
  const { data } = response;
  const gifs = data.map((el) => {
    const { title, id } = el;
    const { url } = el.images.downsized_medium;
    return { title, id, url };
  });
  return gifs;
};

export default function getGifs(keyword = "morty", page = 0) {
  const limit = 5;
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=e`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(reponseGetGif);
}
