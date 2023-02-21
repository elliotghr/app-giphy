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

## CustomHooks

Sirven para reutilizar la lógica y simplificar el código a escribir, lo cual nos deja componentes más limpios y legibles

## ¿Custom Hooks son High Order Components?

Un high order component es una función que devuelve un componente

## Definición de Context

Es un objeto _mágico_ que tiene React, que puedes utilizar en todos tus componentes sin necesidad de que se le pase por parametro, por estado, etc. Puedes acceder a él desde cualquier parte de tu arbol de elementos

## Notas extra

- Los custom hooks no siempre tienen que devolver un array, es una creencia falsa, sin embargo, si se tiene que devolver una colección de objetos es mejor hacerlo en un objeto que en un array, por la versatilidad de manipulación y por la facilidad de acceder a sus props
- Siempre es mejor extraer los métodos de callback en constantes y no insertarlos en el render, esto es por 2 temas, por legibilidad y por escalabilidad
