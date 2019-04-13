$(function () {
    let now = moment();
    let startDateStr = now.format("YYYY/MM/DD") ;
    let endDateStr = now.add(11, 'months').format("YYYY/MM/DD") ;
    let dataMapping = {
        "2019-04-05": {
            "top": "清明节",
            "price": "¥500"
        }
    }
    let du = new DateUtil(startDateStr, endDateStr, function (dataStr, day) {
        let dt = dataMapping[dataStr];
        let def = ` <span class="day">${day}</span>`
        let holiday = "";
        let price = "";
        if (dt) {
            if (dt["top"]) {
                holiday = ` <span class="top-string">${ dt["top"]}</span>`;
            }
            if (dt["price"]) {
                price = ` <span class="price-string ">${ dt["price"]}</span>`;
            }
        }
        return `${holiday}${def}${price}`;
    });

    $("#input1,#input2").click(function () {
        du.show($(this));
    })

})