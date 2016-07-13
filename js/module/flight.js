/**
 * º½°àjs
 */
define("flight", ['require', 'zepto', 'ejs'], function (require, $, ejs) {

    var flight = {};

    flight.init();

    flight.init = function () {
        var testObject = {
            "name": "zhangsan",
            "age": 30
        }
        var html = new EJS({url: 'test.ejs'}).render(testObject);
        $("#testDiv").html(html);
    }


    return flight;
});