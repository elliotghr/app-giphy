# Notas

Se extrae la parte de la llamada a la API en una carpeta llamada services, donde se aloja esta funcionalidad

```js
// Se destructura una keyword, que por defecto es "panda, en caso de que no se proporcione esta keyowrd se pasa un objeto vacío
export default function getGifs({ keyword = "panda" } = {}) {
  return fetch(apiURL);
}
```

```js
// Esto genera que se necesite pasar el objeto keyword con su valor para poder generar ese dinamismo en nuestros gifs
getGifs({ keyword: "morty" }).then((res) => setGifs(res));
```

En el componente ListOfGifs.js tenemos lo siguiente

```js
return gifs.map((el) => (
  <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
));
```

Lo cual puede ser sustituido por

```js
return gifs.map(({ el }) => (
  <Gif key={el.id} title={el.title} id={el.id} url={el.url}></Gif>
));
```

HTML tomará el último botón dentro de un form como un submit
