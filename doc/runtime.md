# Runtime

## Criterios de decisión

Antes de elegir las herramientas que utilizaremos en nuestro proyecto, es importante tener en cuenta ciertos criterios que nos ayudarán a tomar la mejor decisión. Estos criterios son:

- **Estabilidad**: La herramienta se debe de encontrar en fase estable, no podemos depender de herramientas que estén en fase de desarrollo, o que cuente con muchos errores, ya que sino necesitaremos cambiar cada poco tiempo nuestra herramienta.

- **Mantenimiento**: Es conveniente que la herramienta se vaya actualizando, no sea un runtime desactualizado de hace varios años, que no tiene en cuenta las ultimas versiones.

- **Comunidad**: La herramienta debe de tener una comunidad que pueda ayudar a resolver problemas.

## Runtimes

Un runtime es un software que interpreta código fuente y lo ejecuta. En nuestro proyecto se ha elegido el lenguaje de programación de TypeScript por lo que debemos de selccionar uno de los diferentes runtimes que podemos encontrar en TypeScript. Entre los runtimes para TypeScript se pueden encontrar los siguientes:

- [Node.js](https://nodejs.org/en/)
- [Deno](https://deno.com/)
- [Bun](https://bun.sh/)

### Node.js

Node.js es el más popular de todos para TypeScript. Es un runtime multiplataforma y de código abierto que se ejecuta en muchos sistemas operativos diferentes. Node.js utiliza el motor de JavaScript V8 de Google para ejecutar código JavaScript. Que será necesario para poder ejecutar TypeScript. Node.js tiene una gran comunidad que puede ayudar a resolver problemas. 

- Ventajas:
    - Node es un runtime con cierto tiempo de desarrollo, por lo que es un runtime que ya tiene más tiempo y estabilidad que otros que nos encontremos. 
    - Tiene una de las mejores y maś grandes comunidades por lo que esto podría ayudarnos con cualquier problema que pudiesemos encontrar.
    - Node.js tiene nuevas versiones cada poco tiempo, por lo que es un runtime que tiene un buen mantenimiento, y que con lo longevo que es, sería de extrañar que se dejase de mantener, a diferencia de otros.


- Desventajas:
    - Dependencias: El inconveniente que tiene Node.js es que necesita un gestor de dependencias externo, algunos de estos son NPM o Yarn.
    - Node.js necesita transpilar el código de TypeScript a JavaScript, ya que Node.js no puede ejecutar código TypeScript directamente.

### Bun

Bun es un runtime moderno, que puede usarse para TypeScript escrito en Rust.

- Ventajas:
    - Bun no necesita un gestor de dependencias externo, ya que tiene uno integrado llamado Bunx.

- Desventajas:
    - Bun a pesar de tener una versión estable, y tener ya cierta comunidad, no es tan grande como otras comunidades, en el que hay mucha más gente, y hay más problemas resueltos, por lo que será mejor evitarlo ya que así podemos ahorrarnos errores que quizas no esten documentados o arreglados por otros miembros de la comunidad.
    - Otro de los problemas de Bun, es que a pesar de tener una versión estable, no sabemos hasta donde llegara su estabilidad, ya que es un runtime nuevo, y no sabemos si en un futuro se dejará de mantener. Ya que puede llegar un momento en el que se de por finalizado o cancelado el mantenimiento del proyecto.

### Deno

Deno es un runtime diseñado para la seguridad de la información.

- Ventajas:
    - Es un runtime que no necesita transpilar el código de TypeScript a JavaScript, ya que Deno puede ejecutar código TypeScript directamente.
    - Deno tiene cierto tiempo de desarrollo, por lo que es un runtime que ya tiene más tiempo y estabilidad que otros que nos encontremos.
    - Deno tiene nuevas versiones cada poco tiempo, por lo que es un runtime que tiene un buen mantenimiento.

- Desventajas:
    - Deno no es tan popular como Node.js, por lo que no tiene una comunidad tan grande como Node.js, por lo que puede que encontremos problemas muy dificiles de encontrar o que no hayan sido comentados.

## Elección del runtime

Tras valorar los diferentes runtimes que he comentado he escogido Node.js como runtime. Debido a que Node.js es un runtime estable, y con tendencia a no dejarse de mantener, además de contar con una gran comunidad que tiene solucionada la mayoría de problemas que pueda encontrar dentro de esta, a diferencia de otros runtimes que no tienen una comunidad tan grande, y que no tienen tantos problemas resueltos. A pesar de tener que transpilar el código, o de tener mucha carga de CPU, como nuestro proyecto no es muy grande, no tendremos problemas de rendimiento.



