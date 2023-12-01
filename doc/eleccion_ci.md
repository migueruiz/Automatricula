# Sistemas de Integración Continua 

Los sistemas de CI son una herramienta de software que centraliza todas las operaciones de CI creando un sistema fiable y estable para nuestro proyecto.

## Criterios 

Los criterios que debemos de tener en cuenta para la elección del sistema, son estos de aquí:

- **Checks API:** para que podamos usarlo en Github

- **Mantenimiento:** debemos de tener en cuenta que el sistema de CI que elijamos tenga un buen mantenimiento y actualizaciones frecuentes para evitar problemas de seguridad.

- **Coste:** debe ser gratis, ya que no vamos a utilizar servicios de pago.

- **Trabajar con Docker:** debe de permitirnos trabajar con docker.

## Opciones de elección de los Sistemas de CI

 * [Circle CI](https://circleci.com/)

Cuenta con una fácil integración entre GitHub y construir pipelines sobre proyectos Node, además podemos ejecutar imagenes docker para iniciar un contenedor, otra ventaja que tiene es que es gratuito y por ultimo tiene una buen ciclo de actualizaciones, siendo su ultima actualización en noviembre de 2023.

 * [Amazon Web Services CodePipeline](https://aws.amazon.com/es/codepipeline/)

Es una buena opción como la anterior, tiene una fácil integración con Github y permite trabajar con docker, sin embargo, no es gratuito, aunque si que tiene un periodo de prueba gratuito, pero para ello exigen introducir datos de pago, algo que no nos conviene en el tema de gratuitidad.

 * [Cirrus Ci](https://cirrus-ci.org/)

Es compatible con Github. Además nos permite un entorno de ejecucción de imagenes docker contando también con un soporte con problemas o errores en aquellas que sean remotas. Otra de sus ventajas es el ciclo de actualizaciones, ya que encontramos que su ultima versión data de julio de 2023.

 * [Semaphore Ci](https://semaphoreci.com/)

Circle CI no emplea checks API, emplea otros mecanismos, una cosa buena es que nos permite trabajar con Docker, pero al no ser una opción gratuita para la integración con GitHub, no nos interesa como opción.

* [Travis CI](https://travis-ci.com/)

Es un sistema CI compatible con GitHub y Docker. Tiene un buen ciclo de actualizaciones, siendo la última el 6 de noviembre de 2023. Uno de sus inconvenientes es que es gratuito en formato de prueba, ya que posteriormente, aun que no te pida datos de pago, te limita el uso, algo que no nos interesa.

## Decisión final de elección de los Sistemas de CI

Valorando las diferentes opciones que he encontrado, he desistido en los casos de AWS, y de Semaphore, ya que al ser de pago, no es algo que nuestro sistema busque actualmente. Por lo que tenía que decidir entre Circle CI y Cirrus CI, ambos gratuitos, con buen ciclo de actualizaciones, pero finalmente me he decantado por Circle CI, ya que es más sencillo de usar, y tiene una mejor integración con Github. 

## Diferencias de las versiones de node

En el caso del GitHub Actions he elegido la versión 18, para que soporte el mayor numero de versiones. En Docker la versión es la 20, ya que es la última versión estable y me aparecía por defecto.