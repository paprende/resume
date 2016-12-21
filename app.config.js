"use strict";

var config = {
    app: {
        indexFile: 'index.html',
        mainJsFile: 'main.js'
    },
    src: {
        dir: 'src'
    },
    dist: {
        dir: 'dist'
    },
    dev: {
        protocol: 'http',
        host: 'localhost',
        port: '9006',
        proxy: {
            port: '7777'
        }
    },
    fonts: {
        dir: 'fonts'
    },
    images: {
        dir: 'img'
    },
    css: {
        dir: 'css',
        bundleFile: 'styles.css'
    },
    js: {
        dir: 'js',
        bundleFile: 'scripts.js'
    }
};

config.paths = {
    html: './' + config.src.dir + '/*.html', // Matches all html files in current folder
    fonts: './' + config.src.dir + '/' + config.fonts.dir + '/**/*', // Matches all fonts files in current folder
    img: './' + config.src.dir + '/' + config.images.dir + '/**/*', // Matches all images files in current folder
    css: './' + config.src.dir + '/' + config.css.dir + '/**/*.scss', // Matches all scss files, recursively
    js: './' +  config.src.dir + '/' + config.js.dir + '/**/*.js' // Matches all js files, recursively
};

module.exports = config;
