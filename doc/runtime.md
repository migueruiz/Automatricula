# Runtime

## Criterios de decisión

Antes de elegir las herramientas que utilizaremos en nuestro proyecto, es importante tener en cuenta ciertos criterios que nos ayudarán a tomar la mejor decisión. Estos criterios son:

- **Estabilidad**: La herramienta se debe de encontrar en fase estable, no podemos depender de herramientas que estén en fase de desarrollo, o que cuente con muchos errores, ya que sino necesitaremos cambiar cada poco tiempo nuestra herramienta.

- **Mantenimiento**: Es conveniente que la herramienta se vaya actualizando, no sea un runtime desactualizado de hace varios años, que no tiene en cuenta las ultimas versiones.

- **Soporte**: La herramienta que usamos debe de ser una herramienta que tenga soporte para el lenguaje que hemos elegido, en mi caso sería TypeScript.

## Runtimes

Un runtime es un software que interpreta código fuente y lo ejecuta. En nuestro proyecto se ha elegido el lenguaje de programación de TypeScript por lo que debemos de selccionar uno de los diferentes runtimes que podemos encontrar en TypeScript. Entre los runtimes para TypeScript se pueden encontrar los siguientes:

- [Node.js](https://nodejs.org/en/)
- [Deno](https://deno.com/)
- [Bun](https://bun.sh/)

### Node.js

Node.js es el más popular de todos para TypeScript. Es un runtime multiplataforma y de código abierto que se ejecuta en muchos sistemas operativos diferentes. Node.js utiliza el motor de JavaScript V8 de Google para ejecutar código JavaScript. Que será necesario para poder ejecutar TypeScript. Node.js tiene una gran comunidad que puede ayudar a resolver problemas. 

- Ventajas:
    - Node es un runtime con cierto tiempo de desarrollo, por lo que es un runtime que ya tiene más tiempo y estabilidad que otros que nos encontremos. 
    - Tiene una de las mejores y maś grandes comunidades dentro de los runtimes que podemos encontrarnos, además de una gran documentación.

- Desventajas:
    - Dependencias: El inconveniente que tiene Node.js es que necesita un gestor de dependencias externo, algunos de estos son NPM o Yarn.

### Bun

Bun es un runtime moderno, que puede usarse para TypeScript escrito en Rust.

- Ventajas:
    - Tiene soporte para TypeScript.
    - Bun no necesita un gestor de dependencias externo, ya que tiene uno integrado llamado Bunx.

- Desventajas:
    - Bun es nuevo, por lo que no tiene una comunidad tan extensa como Node.js, ya que no le ha dado tiempo a construirse completamente.
    - Bun es un runtime nuevo, por lo que puede tener fallos, por lo que será mejor evitarlo ya que así podemos ahorrarnos errores que quizas no esten documentados o arreglados.

### Deno

Deno es un runtime diseñado para ser seguro.

- Ventajas:
    - Deno no necesita un gestor de dependencias ya que el puede importar los diferentes módulos necesarios por URL.
    - Es un runtime que no necesita transpilar el código de TypeScript a JavaScript, ya que Deno puede ejecutar código TypeScript directamente.

- Desventajas:
    - Deno no es tan popular como Node.js, por lo que no tiene una comunidad tan grande como Node.js, por lo que puede que encontremos problemas muy dificiles de encontrar o que no hayan sido comentados.

## Elección del runtime

Tras valorar los diferentes runtimes que he comentado he escogido Node.js como runtime. Debido a que Node.js es un runtime estable, y maduro, además de contar con una gran comunidad que tiene solucionada la mayoría de problemas que pueda encontrar y con una documentación más extensa y completa que el resto de runtimes.



