require(['../config'], function () {
    require(['jquery', 'underscore', 'util', 'bootstrap'], function ($, _, util) {
        var DEFAULT_TIME = 2 * 60;

        var getTimeText = function (time) {
            var m = parseInt(time / 60),
                s = time % 60 == 0 ? '00' : time % 60;
            return m + ':' + s;
        };

        var time = DEFAULT_TIME,
            instance,

            run = function () {
                if (time < 0) {
                    clearTimeout(instance);
                    instance = null;
                    time = DEFAULT_TIME;

                    $('.time-panel').html('Success!');
                    $('.again-btn').removeClass('disabled')
                    return;
                }

                $('.time-panel').html(getTimeText(time));
                time--;
            };

        $(function() {
            $('.time-panel').html(getTimeText(time));

            $('header, footer').animate({'opacity': 0}, 2000);
            $('.again-btn').addClass('disabled')
            instance = setInterval(run, 1000);
        });

        $(document).mousemove(function(e){
            time = DEFAULT_TIME;
        }).mousedown(function(e) {
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

        // Toggle theme
        var domin = window.location.origin;
            staticPath = domin + '/static/image/do-nothing/';

        var toggleTheme = function () {
            var rand = util.GetRandomNum(1, 5),
                bgUrl = staticPath + rand + '.gif',
                audio = staticPath + rand + '.wav';
            $('body').css({'background-image': 'url(' + bgUrl + ')'});
            $('#bg-audio source').prop('src', audio)
            console.log(rand, bgUrl, audio);
        }

        $('.theme-btn').on('click', toggleTheme);
    });
});