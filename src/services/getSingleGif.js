import { API_KEY, API_URL } from "./settings";

const getGif = (apiResponse) => {
  const { title, id } = apiResponse;
  const { url } = apiResponse.images.downsized_medium;
  const getGifRes = { title, id, url };
  return getGifRes;
};

const getSingleGif = ({ keyGif }) => {
  return fetch(`${API_URL}/gifs/${keyGif}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => getGif(res.data));
};

export default getSingleGif;
