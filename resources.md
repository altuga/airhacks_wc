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