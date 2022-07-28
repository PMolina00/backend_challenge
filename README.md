# Api Rest Backend

_La api funciona mediante node con el framework express, cuenta con tests echos con supertest + mocha + chai, esta api cuenta con los archivos y configuración para su correcto funcionamiento con docker._

## Comandos para la correcta implementación de docker:

- **`"docker build -t [`__"nombre de la imagen"__`] ."`** : con este comando se genera la imagen para su posterior uso.
- **`"docker run -it -p 4000:3000  [`__"nombre de la imagen"__`]"`** : con este comando podremos levantar la api en el [puerto 4000](http://localhost:4000/iecho?text=test) para verlo en el navegador.

## Comandos para el uso de la api en local:

-   **`"npm start"`** : comando para iniciar la aplicación en producción.
-   **`"npm run dev"`** : comando para iniciar la aplicación con nodemon durante el desarrollo.
-   **`"npm run test"`** : comando para iniciar los tests para comprobar el correcto funcionamiento de la aplicación. **("los test se ejecutan mediante supertest con mocha y chai")**

## Versiones de libs & framework utilizadas:
- **`node`**: "12"
- **`express`**: "4.18.1"
- **`mocha`**: "8.0.0" _=> Esto para asegurar la compatibilidad con node 12_
- **`standard`**: "17.0.0"
- **`supertest`**: "6.2.4"
- **`nodemon`**: "2.0.19"
