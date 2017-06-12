require(['../config'], function () {
    require(['jquery', 'underscore', 'block', 'bootstrap'], function ($, _, Block) {
        $(document).mousemove(function(e){
            console.log('mouse move');
        }).keydown(function (event) {
            console.log('keydown');
        });
    });
});