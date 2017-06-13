define(['jquery', 'underscore', 'bootstrap'], function() {
    var GetRandomNum = function(min, max) {
        var range = max - min,
            rand = Math.random();
        return(min + Math.round(rand * range));
    }

    return {
        GetRandomNum: GetRandomNum
    }
})