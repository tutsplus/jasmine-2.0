/*global define */
define(function () {
    'use strict';

    var self = {},
        events = {};

    self.publish = function publish(eventName, data) {
        alert('woo!');
        var subscribers, x, length;

        if (!events[eventName]) {
            return false;
        }

        subscribers = events[eventName];
        for (x = 0, length = subscribers.length || 0; x < length; x += 1) {
            subscribers[x](data);
        }

        return true;
    };

    self.subscribe = function subscribe(eventName, func) {
        if (!events[eventName]) {
            events[eventName] = [];
        }

        events[eventName].push(func);
    };

    self.id = 'events';

    return self;
});