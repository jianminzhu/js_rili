$(function () {
    var now = moment();
    var startDateStr = now.format("YYYY/MM/DD");
    var endDateStr = now.add(11, 'months').format("YYYY/MM/DD");
    var dataMapping = {
        "2019-04-05": {
            "top": "清明节",
            "price": "¥500"
        }
    };
    var du = new DateUtil(startDateStr, endDateStr, function (dataStr, day) {
        var dt = dataMapping[dataStr];
        var def = " <span class=\"day\">" + day + "</span>";
        var holiday = "";
        var price = "";
        if (dt) {
            if (dt["top"]) {
                holiday = " <span class=\"top-string\">" + dt["top"] + "</span>";
            }
            if (dt["price"]) {
                price = " <span class=\"price-string \">" + dt["price"] + "</span>";
            }
        }
        return "" + holiday + def + price;
    });
    $("#input1,#input2").click(function () {
        du.show($(this));
    });
});
