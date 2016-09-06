require(['../config'], function () {
    require(['jquery', 'underscore', 'bootstrap'], function ($, _) {
        var initContainerBlock = $('#init-container'),
            orderContainerBlock = $('#order-container'),
            blockTemplates = _.template('<div class="init <%= className %>" style="left:<%= left %>px;"><%= number %></div>');

        var options = {
            offset: 50,
            offsetIncrease: 70,
            classNamePrefix: 'block'
        };

        function Block (index, number) {
            this.index = index;
            this.left = options.offsetIncrease * index + options.offset;
            this.number = number;
            this.className = options.classNamePrefix + index;
        }

        Block.prototype = {
            appendTo: function (container) {
                var blockHtml = blockTemplates(this);
                if (container) {
                    container.append(blockHtml);
                }
                return this;
            },
            active: function() {
                $('.' + this.className).addClass('active');
                return this;
            },
            unactive: function() {
                $('.' + this.className).removeClass('active');
                return this;
            },
            moveLeft: function(delay) {
                delay = delay || 0;
                this.left -= options.offsetIncrease;
                orderContainerBlock.find('.' + this.className).delay(delay).animate({
                    left: this.left + 'px',
                }, 1000);
                return this;
            },
            moveRight: function(delay) {
                delay = delay || 0;
                this.left += options.offsetIncrease;
                orderContainerBlock.find('.' + this.className).delay(delay).animate({
                    left: this.left + 'px',
                }, 1000);
                return this;
            },
            moveDown: function(delay) {
                delay = delay || 0;
                orderContainerBlock.find('.' + this.className).delay(delay).animate({
                    top: '70px',
                }, 1000);
                var self = this;
                setTimeout(function() {
                    self.active();
                }, delay);
                return this;
            },
            moveUp: function(delay) {
                delay = delay || 0;
                orderContainerBlock.find('.' + this.className).delay(delay).animate({
                    top: '10px',
                }, 1000);
                return this;
            }
        };

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

        // Init block
        var array = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
        $(function() {
            var blocks = [];
            $(array).each(function(index, number) {
                var block = new Block(index, number);
                block.appendTo(initContainerBlock);
                blocks.push(block);
            });
        });

    });
});