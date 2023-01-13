let mix = require('laravel-mix');




mix.js('resources/js/app.js', 'public/js').vue({ version: 2})
   .sass('resources/sass/app.scss', 'public/css');

mix.override(config => {
    // Apply a workaround caused by Laravel Mix using the `webpack-dev-server@v4.0.0-beta`:
    // https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-beta.3.
    // Basically the `dev` property has been deprecated in favor of `devMiddleware`.
    if (config.devServer) {
        config.devServer.devMiddleware = config.devServer.dev;
        delete config.devServer.dev;
    }
});
mix.webpackConfig({
    devServer: {
        proxy: {
            '*': 'http://localhost:8000'
        }
    }
});
mix.disableNotifications(false);
