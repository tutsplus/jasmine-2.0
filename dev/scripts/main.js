/*globals require*/
require(['numbers'], function (numbers) {
    numbers.addAfterDelay(1000, function (result) {
        console.log(result);
    }, 1, 2, 3);
});