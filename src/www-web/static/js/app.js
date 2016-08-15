define(['jquery', 'jquery.cookie'], function ($) {
    var initAjax = function() {
        $.ajaxSetup({
            headers: {
                'X-XSRF-TOKEN': $.cookie('XSRF-TOKEN')
            },
            statusCode: {
                401: function () {
                    window.location.href = '/login';
                }
            }
        });
    };

    $('#language').on('click', 'a', function(event) {
        var lang = $(this).data('lang');

        $.ajax({
            url: '/service/setting/lang',
            type: 'POST',
            data: {
                lang: lang
            }
        })
        .always(function() {
            window.location.reload();
        });
    });

    return {
        init: function() {
            initAjax();
        }
    };
});
