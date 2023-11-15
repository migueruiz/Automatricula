# Gestor de tareas

Un gestor de tareas es una herramienta que nos ayuda a realizar tareas repetitivas de manera más amena.

## Criterios de decisión

Para la elección de nuestro gestor de tareas tenemos que tener en cuenta diferentes criterios, que son importantes para tomar la mejor decisión. Estos criterios son:

- **Comunidad:** El gestor de dependencias debe tener una comunidad que pueda ayudar a resolver problemas.

- **Mantenimiento:** La herramienta es conveniente que tenga cierta antigüedad, para demostrar que es solida, pero que tenga ultimas versiones, que sean lo más recientes posibles.  

- [make](https://www.gnu.org/software/make/)
- [Broccoli](https://github.com/broccolijs/broccoli)
- [TaskFile](https://taskfile.dev/#/)
- [NPM scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)

## Gestores de tareas

Existen muchos gestores de tareas que podemos utilizar, entre ellos se encuentran: Make, Broccoli, TaskFile y NPM scripts, aunque hay muchos más.

### Make

Make es un gestor de tareas que tiene una gran comunidad que puede ayudar a resolver problemas. Además de ser simple y eficiente, Make es un gestor de tareas que es fácil de configurar y no requiere instalar herramientas adicionales. 


### Broccoli

Broccoli es un gestor de tareas basado en flujos de trabajo, viene con soporte integrado para Typescript. Funciona mediante la creación de un árbol de tareas que se ejecuta en orden que hemos establecido. Es eficiente además de rápido, también es muy seguro y evita la ejecución de código que considera que no es legítimo. Aunque el problema que podemos encontrarle es que la comunidad que tiene es muy pequeña. Y que su mantenimiento no es tan bueno como otras herramientas. Ya que no tiene un buen soporte desde hace más de 2 años.

### TaskFile

TaskFile es un gestor de tareas que tiene muchas ventajas, como la posibilidad de ejecutarse en diferentes SO, su facil configuración, y su buen mantenimiento entre otras cosas. El problema que podemos encontrar es que su comunidad al ser joven, no tiene solventado tantos problemas como otras herramientas. Y que además necesitariamos la instación de paquetes adicionales para poder utilizarlo a diferencia de otros gestores de tareas.


### NPM scripts

NPM scripts es un gestor de tareas que viene integrado en NPM,  utiliza el archivo package.json para definir y ejecutar scripts. Las ventajas es que es simple y versátil, ya que realiza tanto tareas simples como muy complicadas. Otra gran ventaja es que NPM scripts es fácil de configurar y no requiere instalar herramientas adicionales.

## Elección del gestor de tareas

Tras valorar las diferentes opciones para mi proyecto he escogido NPM scripts como gestor de tareas. Debido a que NPM scripts tiene una amplia gama de funcionalidades y que esta siempre actualizandose. Además, al contar ya con NPM, no necesitariamos instalar nada más, ya que viene lo necesario para poder utilizar NPM scripts. Otra gran ventaja por la que lo he elegido es su gran comunidad, en comparación de otras herramientas.