# api-development-setup

Este repositório tem como objetivo ser a base para outros projetos de microserviços que usem  Node.js dockerizado, Express como framework de api e sejam desenvolvidos em TS.

Tenha certeza que você possui o Docker e Docker Compose(>=1.27.4) instalados.

- Crie /.env e um .env.development igual o /.env.example

## Testes:

Utilizamos Jest e Supertest para realizar os testes da aplicação

```sh
$ run docker-compose buid test
$ run docker-compose run test
```

## Dev:

Utilizamos ts-node-dev para recarregar a api sempre que salvarmos um arquivo.

```sh
$ run docker-compose buid dev
$ run docker-compose run dev
```
