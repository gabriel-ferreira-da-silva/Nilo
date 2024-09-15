

# NILO-app





app para aplicações de ecommerce implementado com react, node, mysql, docker e shell. O arquivo 'video de apresentação' explica o desenvolvimento d projeto alem de estar disponível em: https://www.youtube.com/watch?v=p26IwDFJ7rk&ab_channel=GabrielFerreiradaSilva

![](https://github.com/gabriel-ferreira-da-silva/Nilo/blob/main/doc/img-main.png)

![](https://github.com/gabriel-ferreira-da-silva/Nilo/blob/main/doc/img2.png)





## dependencias

NILO-app é depedente de 

- react
- node
- mysql
- docker
- shell

para rodar o aplicativo é necessairo entrar no diretorio nilo:

`````
$ chmod +x build.sh
$ ./build.sh
`````

ou condigurar diretamente. Para db:

```
$ cd db
$ sudo mysql -u root  < nilodb_create.sql
```

em backend:

```
$ cd backend
$ npm install
$ node ProductServer.js
```

em frontend:

```
$ cd frontend
$ npm install
$ npm start
```