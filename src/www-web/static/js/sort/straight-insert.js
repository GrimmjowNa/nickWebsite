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

        var array = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
        // order console
        function order (array) {
            for (var i = 1; i < array.length; i++) {
                var position = i,
                    insert = array[i];

                while(position > 0 && insert < array[position - 1]) {
                    array[position] = array[position - 1];
                    position--;
                }
                array[position] = insert;
                // console.log(array);
            }
            console.log(array);
        }
        order(array);

        var array = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
        function initBlock() {
            var blocks = [];

            $(array).each(function(index, number) {
                var block = new Block(index, number);
                block.appendTo(initContainerBlock);
                blocks.push(block);
            });
        }
        initBlock();

        // order animation
        function orderAnimation (array) {
            var delay = 0,
                offset = 1000,
                totalStep = 0,
                steps = [],
                blocks = [];

            $(array).each(function(index, number) {
                var block = new Block(index, number);
                block.appendTo(orderContainerBlock);
                blocks.push(block);
                steps.push(0);
            });

            for (var i = 1; i < array.length; i++) {
                var position = i,
                    insert = array[i],
                    insertBlock = blocks[i];

                    insertBlock.moveDown(totalStep * offset);
                    totalStep++;
                    steps[i] = totalStep;

                    while(position > 0 && insert < array[position - 1]) {
                        blocks[position - 1].moveRight((totalStep - steps[position - 1]) * offset);
                        blocks[position] = blocks[position - 1];
                        insertBlock.moveLeft();

                        totalStep++;
                        steps[position] = totalStep;

                        array[position] = array[position - 1];
                        position--;
                    }

                    blocks[position] = insertBlock;
                    insertBlock.moveUp();
                    totalStep++;
                    steps[position] = totalStep;

                    array[position] = insert;
            }
            return totalStep * offset;
        }

        $('#start-btn').click(function() {
            var $this = $(this);
            if (!$this.hasClass('disabled')) {
                orderContainerBlock.find('div').remove();
                var array = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4],
                    time = orderAnimation (array);


                $this.addClass('disabled');
                setTimeout(function() {
                    $this.removeClass('disabled');
                }, time);
            }
        });
    });
});
