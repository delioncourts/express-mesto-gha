[![Tests](https://github.com/delioncourts/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/delioncourts/express-mesto-gha/actions/workflows/tests-14-sprint.yml)

# Проект Mesto бэкенд

REST API для проектной работы "Mesto". При запуске приложения подключается к mongo по адресу: mongodb://localhost:27017/mestodb. В приложении описана схема пользователя и схема карточки. Успешно проходит автотесты (14 спринт).

## Роуты для пользователей:
* GET /users - возвращает всех пользователей.
* GET /users/:userId - возвращает пользователя по переданному id.
* GET /users/me - возвращает текущего пользователя.
* PATCH /users/me - обновляет данные пользователя.
* PATCH /users/me/avatar - обновляет аватар пользователя.

## Роуты для карточек:
* GET /cards - возвращает все карточки из базы данных.
* POST /cards - создаёт карточку.
* DELETE /cards/:cardId - удаляет карточку по переданному id.

## Директории
`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  

## Запуск проекта локально
* `npm run start` — запускает сервер   
* `npm run dev` — запускает сервер с hot-reload
* `npm run lint` - запустить линтер
