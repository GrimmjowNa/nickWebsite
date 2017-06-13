require(['config'], function () {
    require(['jquery', 'underscore', 'util', 'bootstrap'], function ($, _, util) {
        Notification.requestPermission(function(status){  //status：default/granted/denied
            if(Notification.permission !== status){
                Notification.permission = status;
            }
        });

        var domin = window.location.origin,
            staticPath = domin + '/static/image/home/',
            tipTitle = MESSAGE.title,
            closeTime = 10 * 1000,
            intervalTime = 30 * 60,
            doNothingUrl = domin + '/doNothing',
            eyeExercisesUrl = domin + '/eyeExercises',
            activities = [
                {
                    name: 'doNothing',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'doNothing.jpg',
                        body: MESSAGE.doNothing
                    },
                    url: domin + '/doNothing'
                },
                {
                    name: 'doEyeExercises',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'doEyeExercises.jpg',
                        body: MESSAGE.doEyeExercises
                    },
                    url: domin + '/eyeExercises'
                },
                {
                    name: 'moveBody',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'moveBody.jpg',
                        body: MESSAGE.moveBody
                    },
                    url: domin + '/moveBody'
                },
                {
                    name: 'music',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'music.jpg',
                        body: MESSAGE.music
                    },
                    url: domin + '/music'
                }
            ];

        var instance = function () {
            var index = util.GetRandomNum(0, 2),
                notify = new Notification(tipTitle, activities[index].options);

            notify.onclick = function(){
                window.focus();
                // window.location.href = activities[index].url;
            };

            notify.onshow = function () {
                setTimeout(function(){
                    notify.close();
                }, closeTime)
            };
        };

        // instance();

        window.setTimeout(instance, intervalTime); 
    });
});
