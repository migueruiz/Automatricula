# Gestor de dependencias

Despues de seleccionar un runtime, necesitamos un gestor de dependencias. Un gestor de dependencias es una herramienta que nos permite instalar y gestionar las dependencias de nuestro proyecto.

## Criterios de decisión

Para elegir el gestor de dependencias tendremos en cuenta estos criterios:

- **Soporte:** El gestor de dependencias debe tener soporte para el runtime que hemos seleccionado.

- **Mantenimiento:** La herramienta es conveniente que tenga cierta antigüedad, para demostrar que es solida, pero que tenga ultimas versiones, que sean lo más recientes posibles y no presenten problemas es lo más importante.

- **Comunidad:** El gestor de dependencias debe tener una comunidad amplia que pueda nos ayude a resolver los problemas que se nos presenten.

- [npm](https://www.npmjs.com/)
- [pnpmm](https://pnpm.io/es/)
- [Yarn](https://yarnpkg.com/)

## Gestores de dependencias

Existen diferentes gestores de dependencias que podemos utilizar con Node.js, entre los que se encuentran: npm y Yarn.

### npm

npm se destaca como un gestor esencial de dependencias en el universo de Node.js. Automáticamente integrado como el gestor predeterminado de dependencias de Node.js, no requiere instalación adicional. Su funcionamiento se basa en el archivo package.json, donde se especifican las dependencias del proyecto, y almacena dichas dependencias en la carpeta node_modules. Además de simplificar la gestión de dependencias, npm ofrece la capacidad de actualizarlas fácilmente mediante el comando npm update. Su extensa comunidad añade un valioso respaldo para abordar cualquier problema que pueda surgir en el proceso.

### pnpm

pnpm es un gestor de dependencias que se basa en npm. Es un gestor de dependencias externo a Node.js, por lo que necesitara instalación adicional. Tiene un buen mantenimiento ya que contamos con versiones estables y versiones de pruebas cada poco tiempo. Pero tiene una comunidad mucho más pequeña que sus otros competidores, por lo que puede que no tenga resueltos tantos problemas como otros gestores de dependencias.

### Yarn

Yarn es un gestor de dependencias que fue creado por Meta, su intención fue mejorar y resolver los prestaciones de npm. Yarn es un gestor de dependencias externo a Node.js. Yarn tiene unas prestaciones mucho más rápidas a npm. Aun que Yarn tiene una gran comunidad, es más que pequeña que la de npm ya que este es más antiguo y es el gestor de dependencias por defecto de Node.js.

## Elección del gestor de dependencias

Tras valorar todas las opciones he seleccionado para mi proyecto npm como gestor de dependencias. Esto se debe a que npm es el gestor de dependencias por defecto de Node.js. Además, tiene una gran comunidad que puede ayudar a resolver problemas.