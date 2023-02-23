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

export default function getGifs(keyword = "morty", limit = 25, page = 0) {
  console.log(page);
  console.log(limit);
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * 25
  }&rating=g&lang=e`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(reponseGetGif);
}
