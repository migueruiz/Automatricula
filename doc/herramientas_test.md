# Herramientas de test

## Criterios de decisión

A la hora de la elección de las diferentes herramientas para nuestro proyecto vamos a tener en cuenta una serie de criterios que seran los siguientes:


- **Valoración:** Se tendrá en cuenta la valoración que tiene la herramienta en [Snyk Advisor](https://snyk.io/advisor), para valorar diferentes aspectos, como seguridad, comunidad, mantenimiento, etc.

- **Híbrido:** Se valorará muy positivamente que la herramienta cuente con una biblioteca para aserciones así como el test runner, para ahorranos tiempo.

- **Compatibilidad:** La herramienta que vamos a usar debe de ser compatible con el lenguaje de programación que estamos usando TypeScript, en nuestro caso.


## Herramientas de test

Necesitamos elegir herramientas de test para nuestro proyecto. Para ello será necesario elegir un una biblioteca de aserciones, un test runner y un CLI para ejecutar los test.

### Aserciones

- [Chai](https://www.chaijs.com/): Chai es una biblioteca de aserciones muy completa y compatible con Node.js. Además tiene un [97](https://snyk.io/advisor/npm-package/chai) de valoración en Snyk Advisor.

- [Assert](https://nodejs.org/api/assert.html): assert es una biblioteca de aserciones para Node.js, esta es la biblioteca estandar de Node. Tiene una valoración de [86](https://snyk.io/advisor/npm-package/assert) según SnykAdvisor.

- [Hein](https://www.npmjs.com/package/hein): Hein es una biblioteca de aserciones para Node.js, compatible con TypeScript. Tiene una valoración de [70](https://snyk.io/advisor/npm-package/hein) según SnykAdvisor. Por lo que no es una muy buena opción.


### Test runners o frameworks

- [Jest](https://jestjs.io/): Jest es un testing framework para TypeScript, además de otros. Jest viene con una biblioteca de aserciones incorporada, por lo que nos ahorraría la instalación de una externa. Su valoración en SnykAdvisor es de [92](https://snyk.io/advisor/npm-package/jest).

- [AVA](https://github.com/avajs/ava): AVA es un test runner con soporte para TypeScript. Una gran ventaja es que cuenta con una biblioteca de aserciones integrada pero el problema que nos surge es que es muy simple, y podríamos necesitar hacer uso de otra externa. A pesar de eso su valoración en SnykAdvisor es de [94](https://snyk.io/advisor/npm-package/ava).

- [Vitest](https://vitest.dev/): Vitest es un framework que es compatible con TypeScript y también con Node.js. Una gran ventaja que tiene Vitest es que utiliza la biblioteca de aserciones chai por defecto, que es una de las mejores opciones que podemos escoger, por lo que no es necesario instalar una. Su valoración en SnykAdvisor es de [98](https://snyk.io/advisor/npm-package/vitest).


### CLI

En la ejecución de los test necesitamos un CLI (Command Line Interface), pero por suerte no tenemos la necesidad de buscar ninguno ya que los test runners mencionados anteriormente tienen un CLI integrado. Por lo que no necesitamos buscar e instalar un CLI externo. Por ende el CLI seleccionado, será el que venga dentro del test runner que escojamos.

## Elección de las herramientas de test

Finalmente, para mi proyecto he escogido Vitest como test runner. Esto se debe a que Vitest es un framework que viene con una biblioteca de aserciones (chai) muy completa y muy bien valorada, por lo que no necesito instalar nada externo. Además, Vitest es compatible con TypeScript y tiene una valoración alta en Snyk Advisor.