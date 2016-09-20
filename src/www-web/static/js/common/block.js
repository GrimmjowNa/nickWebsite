define(['jquery', 'underscore', 'bootstrap'], function() {

    var options = {
        offset: 50,
        offsetIncrease: 70,
        classNamePrefix: 'block'
    };

    var setOptions = function(obj) {
        Object.assign(options, obj);
    };

    var getOptions = function() {
        return options;
    }

    var Block = function(name) {
        this.name = name;
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

    var createBlock = function(name) {
        return new Block(name);
    }

    return {
        setOptions: setOptions,
        getOptions: getOptions,
        instance: createBlock
    };
})