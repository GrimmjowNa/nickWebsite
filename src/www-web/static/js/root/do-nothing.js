require(['../config'], function () {
    require(['jquery', 'underscore', 'block', 'bootstrap'], function ($, _, Block) {
        DEFAULT_TIME = 2 * 60;
        var time = DEFAULT_TIME;

        var instance,
            run = function () {
            if (time < 0) {
                time = DEFAULT_TIME;
                $('.time-panel').html('Success!');
                clearTimeout(instance);
                instance = null;
                $('.again-btn').removeClass('disabled')
                return
            }
            var m = parseInt(time / 60),
                s = time % 60 == 0 ? '00' : time % 60;
            $('.time-panel').html(m + ':' + s);
            time--;
        };

        $(function() {
            var m = parseInt(time / 60),
                s = time % 60 == 0 ? '00' : time % 60;
            $('.time-panel').html(m + ':' + s);

            $('header, footer').animate({'opacity': 0}, 2000);
            $('.again-btn').addClass('disabled')
            instance = setInterval(run, 1000);
        });

        $(document).mousemove(function(e){
            time = DEFAULT_TIME;
        }).keydown(function (event) {
            time = DEFAULT_TIME;
        });

        $('.again-btn').on('click', function () {
            if (!instance) {
                $('header, footer').hide(10000);
                $('.again-btn').addClass('disabled');
                instance = setInterval(run, 1000);
            }
        });

        $('.exit-btn').on('click', function () {
            window.location.href = '/';
        })
    });
});