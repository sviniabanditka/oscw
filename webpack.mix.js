// Require Laravel Mix
let mix = require('laravel-mix');

// Process our app.js file and output it to /dist/app.js
mix.js('src/cdn.js', 'dist/oscw.min.js').setPublicPath('dist');
mix.sass('src/app.scss', 'dist/oscw.min.css').setPublicPath('dist');

// Setup HTML-Loader to allow us to import HTML templates
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
});