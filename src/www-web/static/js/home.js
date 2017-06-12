require(['config'], function () {
    require(['jquery', 'underscore', 'bootstrap'], function ($, _) {
        Notification.requestPermission(function(status){  //status值有三种：default/granted/denied
          if(Notification.permission !== status){
            Notification.permission = status;
          }
        });
         var options={
                dir: "ltr",  //控制方向，据说目前浏览器还不支持
                lang: "utf-8",
                // icon: "http://ihuster.com/static/avatar/m_default.png",
                body: "你好呀，欢迎留言交流呀"
            };
    var n = new Notification("hello word!", options); 
    });
});
