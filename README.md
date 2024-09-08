

# NILO-app





app para aplicações de ecommerce implementado com react, node, mysql, docker e shell.

![](https://github.com/gabriel-ferreira-da-silva/Nilo/blob/main/doc/img1.png)

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