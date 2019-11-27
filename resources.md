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