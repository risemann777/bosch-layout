# Сборка проекта

## Node.js
### `20.11.0`
версия Node.js для сборщика

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the project for production to the `public` folder.\

## Состав проекта

### `/gulp и gulpfile.js`
конфиг сборщика

### `/src`
основная папка, в ней ведется вся разработка

### `/public`
папка куда сборщик кладет собранный проект, в нем ничего не менять. При пересборке все затрется

## Состав папки src

`fonts` - шрифты

`images` - все изображения/иконки и т.д

`js` - скрипты. Содержит:
- файл `main.js` тут общие скрипты для всех страниц
- `modules` - модули для импорта в `main.js`

`styles` - стили. Содержит стили проекта и подключенных библиотек
- `assets.scss` - стили библиотек и зависимостей
- `style.scss` - тут подключаются индексные файлы каждой папки. В каждой папке есть файл `index.scss`, в котором
  идет подключение компонентов внутри папки

`templates` - шаблоны
- `components` - компоненты, подключаемые к страницам без изменений
- `mixins` - миксины, компоненты которые при подключении нужно в чем то унифицировать (например задать
  уникальный id и т.д)
- все что в корне папки - шаблоны отдельных страниц.

## Деплой

Фронтовая часть проекта деплоится на firebase командой `firebase deploy`

+есть автодеплой при в prepush хуке с помощью husky

Чтобы можно было деплоить на firebase пройди следующие шаги:
- npm i -g firebase-tools
- firebase login (должен быть акк на firebase с доступом к проекту)
- firebase use default
- firebase deploy