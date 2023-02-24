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

## CustomHooks

Sirven para reutilizar la lógica y simplificar el código a escribir, lo cual nos deja componentes más limpios y legibles

## ¿Custom Hooks son High Order Components?

Un high order component es una función que devuelve un componente

## Definición de Context

Es un objeto _mágico_ que tiene React, que puedes utilizar en todos tus componentes sin necesidad de que se le pase por parametro, por estado, etc. Puedes acceder a él desde cualquier parte de tu arbol de elementos

## UseRef

Nos permite guardar valores que entre renderizados se va a volver inalterable.
Current es el valor actual de la referencia

## Polifill

Es una pequeña bibliotequea que te da una funcionalidad que le falta a tu navegador

## Suspense

Con el Lazy Load no solo evita la llamada de la red si no que cargará el js solo cuando lo necesitemos, separaremos todo el js que cargamos y utilizando react lazy solo hará la petición a la red cuando sea visible, con esto no solo eivtamos una llamada a la red (como en el ejemplo) si no que se evita traer todo el js

## Placeholder con svg

Se pueden traer los placeholder con svg (o también llamados skeletons) tal como lo hace FB o TW, se recomienda esta página
[placeholder skeleton react](https://skeletonreact.com/)

## Masonry

Masonry es una biblioteca de diseño de cuadrícula de JavaScript. Funciona colocando elementos en una posición óptima en función del espacio vertical disponible, algo así como un albañil colocando piedras en una pared.
Aún no soportado de manera nativa en todos los navegadores
[MasonryCanIUse](https://caniuse.com/?search=masonry)

## Debounce

Limitamos el número de veces que un elemento se pueda llamar.
Esto significa que si llamamos 800 veces una llamada en x tiempo (900ms por ejemplo), la llamada solo se hará una vez

## useCallback

Es una forma de volver a crear la misma función entre renderizados

Es una mezcla entre useRef y useEffect, guarda una funcipon entre diferentes renderizados pero también acepta un array de dependencias apra que ese callback se actualice cada que esas dependencias cambien, además limitamos la llamada la siguiente página, ya que nuestra función solo se va a actualizar cuando cambie de pagina

## Notas extra

- HTML tomará el último botón dentro de un form como un submit
- Los custom hooks no siempre tienen que devolver un array, es una creencia falsa, sin embargo, si se tiene que devolver una colección de objetos es mejor hacerlo en un objeto que en un array, por la versatilidad de manipulación y por la facilidad de acceder a sus props
- Siempre es mejor extraer los métodos de callback en constantes y no insertarlos en el render, esto es por 2 temas, por legibilidad y por escalabilidad
