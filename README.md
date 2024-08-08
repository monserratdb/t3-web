[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cb5SOAVY)
# Tarea 3 :construction:

* :pencil2: **Nombre:** Monserrat Díaz Borroni
* :pencil2: **Correo:** mdb@uc.cl

## Código :symbols:

### :warning: Funcionalidades implementadas y no implementadas

Lo único que no pude lograr fue que desde la página se publicara una Entry. Sólo puedo hacer POST desde Postman, pero ahí funciona bien y luego si se introduce el respectivo usuario, sí aparece lo posteado por Postman. Tampoco me quedó muy claro lo de las rutas, como por qué salían los nombres como: user.create en el enunciado; vi una issue de eso y aún así no entendí así que hice lo más parecido a la ayudantía que pude nomás, intentando seguir las reglas de esa parte. 


## Ejecución
Dentro de la consola de Ubuntu, irse a la ruta de la tarea. Hay que abrir dos terminales, una donde se hace .../tarea-3-monserratdb/backend y en la otra .../tarea-3-monserratdb/frontend. Para ambas carpetas se ejecuta:

```
user@laptop:~/ruta$ yarn
user@laptop:~/ruta$ yarn dev
```
Luego se hace ``ctrl`` + click en el link de frontend y se abre la página.
Para revisar el backend hay que abrir ``https://localhost:3000/``

## Postgres

La verdad es que tuve demasiados problemas con lo del .env, así que para poder seguir avanzando mi proyecto lo que hice fue crear variables strings estáticas en el config.js, igual como estaba hecho en el repo de "Mi-primera-API".

No sé si eso me quitará puntos, pero me estaba sobrepasando el estrés de que sin importar lo que hiciera me diera error de "password must be a string" (tampoco entendí muy bien lo que explicaron en los anuncios porque cuando puse DB_USERNAME se mantuvo el error, puede ser que tuviera algo que ver con que cuando estaba siguiendo los pasos del tutorial que subieron, siempre me dio este mensaje, desde el primer comando del video: could not change directory to "/home/moonse": Permission denied. Al final funcionaba con sudo -u ..., pero luego nunca me dejaba ver el mensaje de si se inicia o no el servicio... Muy raro en verdad).

De todas formas dejaré aquí los comandos de la ayudantía (ayudantia-creacion-api-template):
```

1. sudo -u postgres psql
2. sudo -u postgres createuser --superuser NOMBRE_USUARIO
3. sudo -u postgres createdb NOMBRE_DATABASE
(Ahora dentro de sudo -u postgres psql)
4. ALTER USER nombre_usuario WITH PASSWORD 'clave';
(Fuera de sudo -u postgres psql)
5. psql -U NOMBRE_USUARIO -d NOMBRE_DATABASE -h 127.0.0.1
```
Igual es importante tener en consideración que aunque uno crea tarea_3, después al ir ejecutando la tarea se crea tarea_3_development, aunque nunca entendí muy bien por qué me pedían crear una si luego se creaba la otra.

## Entorno
Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env` (Esto es de lo que no hice uso, pero lo dejo de todas formas)

```
1. moonse
2. 1
3. tarea_3
4. 127.0.0.1
5. 3000
```
## Sequelize

En User y Entry primero se ejecutan los comandos que dicen migration, luuego se ejecutan los comandos de Migraciones y finalmente se ejecutan los de Seeds.

### User
```
yarn sequelize-cli migration:generate --name USUARIOS
yarn sequelize-cli seed:generate --name USUARIOS
```
### Entry
```
yarn sequelize-cli migration:generate --name ENTRIES
yarn sequelize-cli seed:generate --name ENTRIES
```

## Migraciones
```
yarn sequelize-cli db:migrate
yarn sequelize-cli db:migrate:status
```
Si con el último comando sale "up" antes de cada nombre de archivo de la carpeta migrations, se sigue con los comandos de Seeds (desde la segunda línea de User en adelante, sin repetir los de migration)

### Seeds
```
yarn sequelize-cli db:seed:all
```

## Bibliografia
```
https://github.com/IIC2513/ayudantia-creacion-api-template
https://github.com/IIC2513/Mi-primera-API
```

Prácticamente la totalidad de mi código está basada (algunas partes ni siquiera fueron modificadas) de los códigos de los links mencionados :)
