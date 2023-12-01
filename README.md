# Automatricula

[![Comprueba
IV.yaml](https://github.com/migueruiz/Automatricula/actions/workflows/comprueba_yaml.yaml/badge.svg)](https://github.com/migueruiz/Automatricula/actions/workflows/comprueba_yaml.yaml)

## Descripción del problema

Soy un alumno universitario que quiere solucionar los problenmas de incompatibilidad horarias de las diferentes asignaturas que tengo.


## Clase Estudiante

La clase candidato representa a la entidad principal del proyecto. En esta clase se encuentra la lógica de negocio principal del proyecto, siendo la creación del horario de un alumno.

### Comprobación de sintaxis

Para comprobar la sintaxis de esta entidad y del resto del código será necesario ejecular la tarea check puede hacerse de las siguientes formas:

```bash
npm run check
```

[Runtime](/doc/runtime.md)
[Task runner](/doc/gestor_tareas.md)
[Gestor de dependencias](/doc/gestor_dependencias.md)

### Ejercución de los tests

Para ejecutar los test para la comprobación del horario de un alumno se puede hacer de las siguientes formas:

```bash
npm run test
```

[Test](/doc/herramientas_test.md)

### Contenedor de test

Podemos construir la imagen del contenedor de test con el siguiente comando:

```bash
docker build -t migueruiz/automatricula .
```

Y ejecutamos el contenedor con el siguiente comando:

```bash
docker run  -tv `pwd`:/app/test migueruiz/automatricula
```

También accedemos a la imagen que tenemos en docker hub con este enlace [Automatricula](https://hub.docker.com/repository/docker/migueruiz/automatricula)

[Contenedor](/doc/eleccion_imagen_base.md)

### Integración continua

 - [CI](/doc/eleccion_ci.md)

## Historias de usuario y Milestone

- [Historias de usuario](./doc/historias_usuario.md)

- [Milestone](./doc/milestone.md)

