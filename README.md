# Desktop PWA
Experimenting with Desktop PWAs on Chrome 68+. Follow instructions below to get started.

To learn and understand about Desktop PWAs, please see my corresponding Medium article: [Goodbye Electron, Hello PWAs](https://medium.com/@novicki_david/goodbye-electron-hello-desktop-pwas-f316b8f39882)

## Getting started
Clone the repository down, open your terminal to the root of the application and run:
```
npm install
npm start
```
This will get the application running however currently Desktop PWAs do not allow installation prompts over HTTP. I recommend jumping on [Netlify](https://www.netlify.com/) or another provider to host your site.

## To build a distribution version of this application
```
npm run build
open build/
```
