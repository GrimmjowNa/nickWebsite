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
            closeTime = 5 * 1000,
            intervalTime = 40 * 60 * 1000,
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
                    url: domin + '/doNothing',
                    weight: 2
                },
                {
                    name: 'doEyeExercises',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'doEyeExercises.jpg',
                        body: MESSAGE.doEyeExercises
                    },
                    url: domin + '/eyeExercises',
                    weight: 1
                },
                {
                    name: 'moveBody',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'moveBody.jpg',
                        body: MESSAGE.moveBody
                    },
                    url: domin + '/moveBody',
                    weight: 2
                },
                {
                    name: 'music',
                    options: {
                        lang: 'utf-8',
                        icon: staticPath + 'music.jpg',
                        body: MESSAGE.music
                    },
                    url: domin + '/music',
                    weight: 0
                }
            ];

        var weightSum = 0;
        for (var i = 0; i < activities.length; i++) {
            weightSum = weightSum + activities[i].weight;
        }

        var instance = function () {
            var index = util.GetRandomNum(0, 2),
                notify = new Notification(tipTitle, activities[index].options);

            notify.onclick = function(){
                window.focus();
                notify.close();
                window.open(activities[index].url);
            };

            notify.onshow = function () {
                setTimeout(function(){
                    notify.close();
                }, closeTime)
            };
        };

        // instance();

        window.setInterval(instance, intervalTime); 
    });
});
