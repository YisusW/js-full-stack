# js-full-stack
Using Lookback4 Angular 9 and MongoDB

This project has 2 folders 

## 1 api-lookback

api-lookback folder has a api to provide all of data to front-angular

## 2 front-angular

front-angular folder has a skeleton angular project, so you need yo run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

to run the front-angular project, you need to have an enviroment ready, because there is the api, so i will give you a example to do easier run this project

export const environment = {
  production: false,
  apiLookBack: 'http://localhost:3000', // this will be a lookback project
  apiGitHub: 'https://api.github.com' // this is api github
};
