require.config({
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'jquery.cookie': {
            deps: ['jquery'],
        },
    },
    baseUrl: '/static',
    paths: {
        'app': 'js/app',
        'jquery': 'libs/jquery/jquery-2.1.4.min',
        'jquery.cookie': 'libs/jquery/jquery-cookie',
        'bootstrap': 'libs/bootstrap/js/bootstrap.min',
        'underscore': 'libs/underscore-min',

        'block': 'js/common/block'
    }
});

define(['app', 'bootstrap'], function (app) {
    app.init();
});