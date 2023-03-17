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

Es una mezcla entre useRef y useEffect, guarda una funcion entre diferentes renderizados, esto quiere decir que solo se creará cuando se renderice por primera vez el componente y también acepta un array de dependencias para que ese callback se actualice cada que esas dependencias cambien, entonces, esta función solo se va a volver a crear cuando cambien esas dependencias
En el ejercicio limitamos la llamada la siguiente página, ya que nuestra función solo se va a actualizar cuando cambie de pagina

## Test basico

corriendo el comando npum run test podemos realizar un test de la app (Siempre que esté disponible), en el archivo App.test.js podemos correr el siguiente test para asegurarnos de que sí renderiza nuestra app:

```js
test("renders without crashing", () => {
  //
});
```

Explicando el código de App.test.js

```js
// Render renderiza el componente que se pasa
import { render, screen } from "@testing-library/react";
// Importamos nuestra app
import App from "./App";

// Aqui añadimos nuestros test, podemos añadir tantos como queramos
test("renders without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

React-testing-library tiene una forma de hacer querys al DOM, [testing-library](https://testing-library.com/) tiene una serie de metodos para consultar el documento y buscar los elementos, se pueden encontrar de manera sincrona o asincrona, estoas pueden ser por labelText, text, title, testId, etc

En un proyecto real se suelen hacer los siguientes test:

- Más de integración
- Unitarios

Siempre intentar utilizar el findBy...

## Profiler

Nos ayuda a saber que sucede con nuestra aplicación, a detectar cambios y ver su compartmiento.
Un commit significa que ha ocurrido algo dentro del arbol de elementos y se ha generado una accion, que es normalmente un renderrizado)

Pasar una prop con el spread operator nos generará un "Error" al comparar las propiedades, ya que está comparando la referencia y no el contenido del objeto, eso anula el memo que se tiene en el componente
Se considera como mala practica pasar las props con el spread operator (...) ya que se está creando un objeto nuevo y esto puede perjudicar al memos

## Vercel, qué es y cómo funciona

Es totalmente gratis, da un dominio HTTPS, deploy continuos con git, métopdo de compresión, es de los creadores de Next js

Con Vercel, los desarrolladores pueden alojar su código en un repositorio Git y conectarse a Vercel para implementar y alojar su aplicación. La plataforma es especialmente adecuada para aplicaciones de React, Next.js y otros marcos de JavaScript, así como para sitios web estáticos generados por herramientas como Hugo y Jekyll.

Vercel también proporciona herramientas de colaboración para equipos de desarrollo y características de escalabilidad para manejar grandes cargas de tráfico. Además, su servicio de análisis en tiempo real ayuda a los desarrolladores a monitorear el rendimiento y detectar problemas en sus aplicaciones.

## SEO

Tenemos dos librerías recomendadas: React Helmet o React head

React Helmet está bien soportado y es muy usado, sin emabrgo, tiene muchos issues, es más completa, tiene más comunidad

React head es más pequeña, similar a Helmet

Ambos son compatibles con server side rendering

Helmet nos ayuda a tener el seo en componenetes, lo cual lo hace más declarativo y fácil de leer. Se recomienda eliminar cualquier etiqueta que se esté controlando con Helmet

## UseRef

Nos permite guardar un valor entre renderizados de un hook

## crawler de google

Puede ejecutar las funciones del cliente de nuestro Js, tiene soporte con Intersection Observer

## Notes

- HTML tomará el último botón dentro de un form como un submit
- Los custom hooks no siempre tienen que devolver un array, es una creencia falsa, sin embargo, si se tiene que devolver una colección de objetos es mejor hacerlo en un objeto que en un array, por la versatilidad de manipulación y por la facilidad de acceder a sus props
- Siempre es mejor extraer los métodos de callback en constantes y no insertarlos en el render, esto es por 2 temas, por legibilidad y por escalabilidad
- Los customHooks deben regresar (de preferencia) solo lógica, no deben regresar elementos JSX
