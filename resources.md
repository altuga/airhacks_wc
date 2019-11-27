#Resources

https://developer.mozilla.org/en-US/docs/Web/Houdini
https://postcss.org
https://cssnext.github.io
https://blog.mozilla.org/blog/2017/10/18/mozilla-brings-microsoft-google-w3c-samsung-together-create-cross-browser-documentation-mdn/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://devdocs.io/dom/fetch_api/using_fetch
https://www.browsersync.io
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://lit-html.polymer-project.org
https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
https://rollupjs.org/guide/en/

## rollup configuration

import resolve from 'rollup-plugin-node-resolve';
export default {
  input: 'node_modules/@ui5/webcomponents/dist/DatePicker.js',
  output: {
    file: './dist/DatePicker.js',  
    format: 'esm',
    name: 'ui5'
  },
  plugins: [
    resolve({
      mainFields: ['jsnext:main']
    })
  ]
}

## flux
https://facebook.github.io/flux/docs/in-depth-overview/
https://redux.js.org
//alternative
https://mobx.js.org/README.html

## redux conversion to ES 6 modules

npm init
npm i redux
npx @pika/web
cd web_modules

https://github.com/pikapkg/web
https://www.pika.dev/registry
https://babeljs.io
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
https://babeljs.io/docs/en/babel-preset-env
https://eslint.org/demo
https://jshint.com
https://prettier.io
https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
https://tools.ietf.org/id/draft-ietf-webpush-vapid-03.html
https://developer.mozilla.org/en-US/docs/Web/API/notification
https://www.pushr.com
https://firebase.google.com
https://developer.mozilla.org/en-US/docs/Web/API/Push_API
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
https://www.chromium.org/teams/web-capabilities-fugu
http://jwtenizr.sh

----


Is Munich Airport too far? Check out effectiveweb.training on-demand workshop.

"Building WebApps with WebComponents and WebStandards #usetheplatform."
How to build web applications with webstandards only (=no migrations). CI / CD, tooling and shipping included.

Plain web platform is perfectly suitable to build responsive and lean applications quickly without any dependencies. Component reusability and application structure are covered by WebComponents -- another standard.

This workshop is based on "SPA with web standards only" workshop and explains how to quickly build sustainable applications and websites.

Prerequisites
Attendance at Web Essentials, Webstandards online training or adequate knowledge / experience.

Topics
We will build from scratch, without any external dependencies, a web application running in a browser (Single Page Application / Progressive Web Application) and cover:

Future-proof design (no migrations)
build setup and targeting legacy browsers
Architecting and designing MicroFrontends for MicroServices
Structuring complex applications with Web Components
Implementing token-based (JWT) authentication, authorization and backend integration
Effective internationalization
Brief WebComponents introduction (shadow DOM, ES 6 templates, ES 6 imports, lazy loading, polyfills)
Building and sharing reusable custom elements (web components)
Complex state management, view coordination, complex data flows and MVC-like design
BCE structure for frontends
Navigation and routing with or without 3rd party components
Using 3rd-party components, like grids / tables, charts or date pickers with SPAs
When it gets complex: data binding, events and extensibility
Asynchronous processing with async, Promises and WebWorkers
Implementing offline capabilities with Service Workers
Mobile devices and building native-like applications
Implementing native notifications and web push
From Progressive Web Apps to Desktop Applicatons
Offline applications
Service Workers
Native installers
Effective End To End testing (E2E)
Useful HTML 5 APIs, copy and paste, drag and drop, persistence, sharing, payments, geo location (...)
Performance and debugging tools, hacks and workarounds
With or without frameworks. ReactJS, Angular, EmberJS, Polymer, Vue.js vs. Vanilla ES6+
Integration with Java EE backend, REST services, WebSockets and SSE events
CI / CD integration
Component API and interaction with existing Angular, ReactJS, Vue (...) applications
...
In this workshop I would like to explain the most significant features with working code and prepared examples. As a reference, you will get a GIT repository with all snippets and solutions, as well as prepared sample applications.

Environment requirements / prerequisites.

I/we will spend 90% of the time in code.

Feel free to contact me / register via email: workshops[-AT-] adam-bien.com