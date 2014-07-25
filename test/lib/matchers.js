/*global define */
/* jslint bitwise: true */
define(function () {
    'use strict';

    var self = {};

    self.toBeOdd = function toBeOdd() {
        return {
            compare: function compare(actual) {
                var result = {};

                result.pass = !!(actual & 1);

                if (!result.pass) {
                    result.message = 'Dude, ' + actual + ' is totally not odd';
                }

                return result;
            }
        }
    };

    return self;
});
