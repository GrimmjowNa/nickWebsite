require(['../config'], function () {
    require(['jquery', 'underscore', 'block', 'bootstrap'], function ($, _, Block) {
        var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
        function shellSort(arr) {
            var len = arr.length;
            for(var step = Math.floor(len / 2); step > 0; step = Math.floor(step / 2)) {
                for (var i = step; i < len; i++) {
                    for(var j = i - step; j >= 0 && arr[j] > arr[step + j]; j -= step) {
                        var temp = arr[j];
                            arr[j] = arr[step + j];
                            arr[step + j] = temp;
                    }
                }
            }
            console.log(arr);
        }
        shellSort(arr);
    });
});