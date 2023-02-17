const api_key = "I5CtQc1XVkHMhZg0ys5ePE0OS1VbZ7hr";

export default function getGifs(keyword = "panda") {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((el) => {
        const { title, id } = el;
        const { url } = el.images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
