# Imagen base para el contenedor

## Criterios de decisión de elección de imagen base

A la hora de la elección de la imagen para nuestro proyecto, tendre en cuenta una serie de criterios, que se muestran más abajo, para valorar cuál es la mejor opción:

- **Tamaño optimo**: Es conveniente que la imagen base sea lo más pequeña posible para que el container sea lo más ligero posible.

- **Ciclo de actualizaciones**:  Debe tener un buen mantenimiento y actualizaciones frecuentes para evitar problemas de seguridad, entre otros.

- **Compatibilidad**: La imagen base debe de ser compatible con el proyecto que vamos a realizar, y con todas las herramientas que necesitamos para su despliegue posterior.


## Opciones de elección de imagen base

Algunas de las posibles elecciones que podemos hacer son estas: 

* [node](https://hub.docker.com/_/node): es la versión oficial de node en docker hub basada en debian su tamaño ocupa 1.1GB, por lo que no es muy conveniente, sus actualizaciones son buenas, tiene un buen ciclo, y es compatible con las herramientas que precisamos. Además de que su nota en snyk advisor es de [81](https://snyk.io/advisor/npm-package/node).

* [node:alpine](https://hub.docker.com/_/alpine): es una variante de la versión oficial de node en docker hub basada en alpine, una de sus ventajas es que su tamaño es de 142MB, muy poco comparado con otras imagenes que podemos elegir, tiene buen ciclo de actualizaciones y además es compatible con las herramientas. Además de que su nota en snyk advisor es de [88](https://snyk.io/advisor/npm-package/alpinejs).

* [cimg/node](https://hub.docker.com/r/cimg/node): es una imagen de node basada en debian, su tamaño es de 1.32GB por lo que no se considera una opción muy favorable, a pesar de ello cuenta con una buen ciclo de actualizaciones, y es compatible. Además de que su nota en snyk advisor es de [36](https://snyk.io/advisor/npm-package/cimg-node).

## Decisión final de elección de imagen base

Tras valorar las diferentes opciones que he encontrado, me decantare por la imagen oficial de node, pero la variante de Alpine, ya que es una imagen muchisimo más ligera, y que además cumple con el resto de requisitos que necesitamos.