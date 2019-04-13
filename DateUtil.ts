class DateUtil {
    begin
    _s
    end
    jit
    realStart
    realEnd
    jinput

    show(jinput, dateStr = this.m().format("YYYY/MM/DD")) {
        try {
            let selectValue = jinput.val();
            this.jinput = jinput;
            if (selectValue == "") {
                dateStr = this.m(dateStr).format("YYYY/MM/DD")
            } else {
                dateStr = selectValue;
            }
            this.jit.find(".select-single-day").removeClass("select-single-day");
            this.jit.find(`[data-date="${dateStr}"][data-type="true"]`).addClass("select-single-day");
        } catch (e) {
        }
        this.jit.show();
    }

    hide() {
        this.jit.hide();
    }

    constructor(dateStart, dateEnd, public tplFun = function (dateStr, days) {
        return `<span class="day">${ days}</span>`
    }, public contentId = "contentId", public $ = window["jQuery"]||window["Zepto"]||window["$"], public m = window["moment"]) {
        this.begin = m(dateStart)
        this._s = m(dateStart)
        let mstart = this.begin.startOf('month')
        this.realStart = m(mstart).startOf('week')
        this.end = m(dateEnd)
        let mend = this.end.endOf('month')
        this.realEnd = m(mend).startOf('week')
        $(`body `).delegate(`#${contentId} [data-opt-close]`, "click", function () {
            $($(this).attr("data-opt-close")).hide();
        })
        var v = this;
        $(`body `).delegate(`#${contentId} [ data-date]`, "click", function () {
            v.jinput.val($(this).data("date"))
            v.hide();
        })
        this.jit = $("#" + contentId)

        if (this.jit.length === 0) {
            var all = []
            var now = m(this.begin)
            while (now <=this.end) {
                all.push(this.getMonthItems(now));
                now=now.add(1,"months")
            }
            var allMonthContent = all.join("\n")
            $("body").append(`
            <div id="${contentId}"  style="display: none;"> 
    <div data-reactroot="">
        <div class="calendar-page ">
            <div class="m-calendar m-noSelectBar-calendar ">
                <header class="page-header ">
                    <div class="left-action ">
                        <div class="left-btn" data-opt-close="#${contentId}">返回</div>
                    </div>
                    <div class="page-title">日历</div>
                </header>
                <div class="calendar-bar">
                    <div class="calendar-tab">
                    </div>
                    <ul class="calendar-date-bar">
                        <li class="dates-item">日</li>
                        <li class="dates-item">一</li>
                        <li class="dates-item">二</li>
                        <li class="dates-item">三</li>
                        <li class="dates-item">四</li>
                        <li class="dates-item">五</li>
                        <li class="dates-item">六</li>
                    </ul>
                </div>
                <div class="calendar-content" id="calendar-content">
                   ${allMonthContent}
                   
                </div>
            </div>
        </div>
    </div>
</div>
                    <style> 
.icon {
    line-height: 1
}

.new_icon {
    line-height: 1
}

.new_icon:before {
    font-family: touch_spa;
    font-style: normal;
    font-weight: normal !important
}

.icon:before {
    font-family: touch_spa;
    font-style: normal;
    font-weight: normal !important
}

.i-calendar:before {
    content: "\\F19F";
    font-size: 24px;
    margin: 4px 0;
    display: inline-block
}

.i-arrow_down:before {
    content: "\\F3CB"
}

.i-arrow_left:before {
    content: "\\F3CD"
}

.i-arrow_right:before {
    content: "\\E002"
}

.i-arrow_up:before {
    content: "\\E003"
}

.i-home:before {
    content: "\\F50C";
    font-size: 20px;
    color: #fff
}

.i-help:before {
    content: "\\E004"
}

.i-expand:before {
    content: "\\E005"
}

.i-accept:before {
    content: "\\E006"
}

.i-guarantee:before {
    content: "\\E007"
}

.i-oneway:before {
    content: "\\F43A"
}

.i-roundway:before {
    content: "\\F49D"
}

.i-split:before {
    content: "\\E00A"
}

.i-yen:before {
    content: "\\F244"
}

.i-bin:before {
    content: "\\E00C"
}

.i-info:before {
    content: "\\E00D"
}

.i-minus:before {
    content: "\\E00E"
}

.i-plus:before {
    content: "\\E147"
}

.i-edit:before {
    content: "\\E010"
}

.i-contact:before {
    content: "\\E011"
}

.i-pluso:before {
    content: "\\E012"
}

.i-minuso:before {
    content: "\\E013"
}

.i-bargain_flight:before {
    content: "\\E029"
}

.i-flight_order:before {
    content: "\\F0E9"
}

.i-flight_vip:before {
    content: "\\F364"
}

.i-price_trend:before {
    content: "\\E0B8"
}

.i-flight_dynamic:before {
    content: "\\E02A"
}

.i-lowerprice_alert:before {
    content: "\\F154"
}

.i-switch_city:before {
    content: "\\F3C3"
}

.i-clear_input:before {
    content: "\\E01A"
}

.i-checked:before {
    content: "\\F496"
}

.i-oneway_thin:before {
    content: "\\F173"
}

.i-roundway_thin:before {
    content: "\\F174"
}

.i-time_rank:before {
    content: "\\F065"
}

.i-choose_total:before {
    content: "\\E01F"
}

.i-price_rank:before {
    content: "\\F2FC"
}

.i-selected:before {
    content: "\\F056"
}

.i-filter:before {
    content: "\\F0F7"
}

.i-recom_rank:before {
    content: "\\F3B8"
}

.i-sort_desc:before {
    content: "\\E024"
}

.i-sort_desc_new:before {
    content: '\\2192'
}

.i-direct_flight:before {
    content: '\\F553'
}

.icons-help:before {
@extend . i-info: before;
@extend . icon
}

.i-plane:before {
    content: "\\E025"
}

* {
    -webkit-tap-highlight-color: transparent
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    font-family: PingFang SC, arial, helvetica, STHeitiSC-Light, Heiti SC, droidsansfallback, dengxian, microsoft yahei;
    -webkit-font-smoothing: antialiased
}

ul, li {
    list-style: none
}

html, body {
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    color: #333;
    background: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

a {
    color: #000;
    text-decoration: none
}

.module-content {
    display: none
}

#footer-gg {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 10px
}

#ad_qp_id {
    display: block
}

.transitionWrapper-enter {
    opacity: .01;
    -webkit-transition: opacity 500ms ease-in;
    -o-transition: opacity 500ms ease-in;
    -moz-transition: opacity 500ms ease-in;
    transition: opacity 500ms ease-in
}

.transitionWrapper-enter.transitionWrapper-enter-active {
    opacity: 1
}

.transitionWrapper-leave {
    opacity: 1;
    -webkit-transition: opacity 500ms ease-in;
    -o-transition: opacity 500ms ease-in;
    -moz-transition: opacity 500ms ease-in;
    transition: opacity 500ms ease-in
}

.transitionWrapper-leave.transitionWrapper-leave-active {
    opacity: 0
}

.transitionWrapper {
    position: relative
}

html, body {
    height: 100%;
    width: 100%
}

#app {
    height: 100%
}

.app-content {
    height: 100%
}

.page-header {
    height: 44px;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    width: 100%;
    background: #1ba9ba;
    top: 0;
    z-index: 100
}

.page-header .page-title {
    text-align: center;
    color: #fff;
    font-weight: 400;
    margin: 0 60px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap
}

.page-header .left-action, .page-header .right-action {
    width: 50px;
    height: 44px;
    height: 100%;
    position: absolute;
    top: 0;
    line-height: 44px
}

.page-header .right-action {
    right: 0;
    padding-right: 10px;
    text-align: right
}

.page-header .left-action {
    left: 0;
    padding-left: 10px;
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    vertical-align: middle;
    color: #7ff
}

.page-header .left-btn, .page-header .right-btn {
    color: #fff;
    font-size: 16px
}

.header-tab {
    width: 80%;
    margin: auto;
    height: 30px
}

.header-tab .left-tab, .header-tab .right-tab {
    border: 1px #fff solid;
    display: inline-block;
    width: 40%;
    height: 100%
}

.cityindex {
    position: fixed;
    width: 40px;
    z-index: 2;
    right: 0;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-top: 90px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #1ba1ba;
    font-size: 12px;
    min-height: -webkit-calc(100% - 90px)
}

.cityindex li {
    width: 40px;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center
}

.locwrap {
    font-size: 14px;
    line-height: 30px;
    padding: 8px 0;
    height: 30px
}

.locwrap .locerr {
    margin-right: 8px
}

.locwrap .locing {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: 1.5s ease 0s infinite normal location-loading;
    -moz-animation: 1.5s ease 0s infinite normal location-loading;
    -o-animation: 1.5s ease 0s infinite normal location-loading;
    animation: 1.5s ease 0s infinite normal location-loading
}

.locwrap .locing:after {
    content: '...'
}

.locwrap .locbtn {
    width: 100px;
    font-size: 14px;
    display: inline-block;
    overflow: visible;
    -o-text-overflow: clip;
    text-overflow: clip;
    color: #1ba1ba;
    vertical-align: middle
}

.locwrap .locret {
    width: 75px;
    height: 32px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 14px;
    background: #fff;
    text-align: center;
    line-height: 30px;
    display: inline-block;
    margin: 0 12px 12px 0;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis
}

@-webkit-keyframes location-loading {
    from {
        width: 55px
    }
    to {
        width: 70px
    }
}

@-moz-keyframes location-loading {
    from {
        width: 55px
    }
    to {
        width: 70px
    }
}

@-o-keyframes location-loading {
    from {
        width: 55px
    }
    to {
        width: 70px
    }
}

@keyframes location-loading {
    from {
        width: 55px
    }
    to {
        width: 70px
    }
}

.citylist {
    position: absolute;
    width: 100%;
    top: 84px;
    background: #f3f8fb;
    color: #333;
    -webkit-overflow-scrolling: touch;
    bottom: 0;
    overflow: scroll;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 1
}

.citylist dt {
    line-height: 32px;
    text-align: left;
    font-size: 12px
}

.citylist dl {
    padding-left: 15px;
    font-size: 0;
    overflow: hidden
}

.citylist dd {
    width: 75px;
    height: 32px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-size: 14px;
    background: #fff;
    text-align: center;
    line-height: 30px;
    display: inline-block;
    margin: 0 12px 12px 0;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap
}

.citylist dd.checked {
    color: #1ba9ba
}

.citylist .title {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #d7dbde
}

.citylist .title dt {
    padding-left: 22px;
    border-bottom: 1px solid #d7dbde
}

.citylist .title dd:last-child .city {
    border: 0
}

.citylist .title dd {
    position: relative;
    width: 100%;
    background: #fff;
    height: 43px;
    line-height: 43px;
    font-size: 14px;
    overflow: hidden;
    margin: 0
}

.citylist .title dd.checked:before {
    content: "\\E1D1";
    position: absolute;
    top: 0;
    left: 7px;
    display: block;
    width: 25px;
    height: 25px;
    color: #1ba1ba
}

.citylist .title dd.checked {
    color: #333
}

.citylist .title dd .city {
    width: 90%;
    text-align: left;
    margin-top: -1px;
    border-bottom: 1px solid #d7dbde;
    position: relative;
    height: 43px;
    float: right
}

.citylist .title dd .city .code {
    font-size: 12px;
    color: #a6a6a6
}

.tips {
    position: fixed;
    width: 64px;
    height: 64px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #ccc;
    color: #fff;
    z-index: 6;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 64px;
    font-size: 26px
}
 
.alert-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 25px;
    display: none;
    background-color: rgba(0, 0, 0, 0.42)
}

.alert-container.on {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    z-index: 9999
}

.alert-container .alert-content {
    min-width: 270px;
    background-color: #fff;
    border-radius: 4px
}

.alert-container .alert-content .text {
    padding: 15px;
    max-height: 285px
}

.alert-container .alert-content .real-content {
    max-height: 260px;
    overflow: auto;
    word-break: break-all;
    text-align: center
}

.alert-container .alert-content .real-content .text {
    padding: 0
}

.alert-container .alert-content .fb {
    text-align: center;
    font-weight: 900
}

.alert-container .alert-content p {
    text-align: left
}

.alert-container .alert-content .btn-wrap {
    border-top: solid 1px #e1e5e9;
    font-size: 16px;
    color: #157efb;
    text-align: center
}

.alert-container .alert-content .btn-wrap .ok-btn {
    padding: 8px 0;
    display: inline-block;
    width: 100%
}

.alert-container .alert-content .btn-wrap .confirm-btn {
    font-weight: 900
}

.alert-container .alert-content .btn-wrap .confirm-btn, .alert-container .alert-content .btn-wrap .cancel-btn {
    padding: 8px 0;
    display: inline-block;
    width: 49%;
    width: calc(50% - 1px)
}

.alert-container .alert-content .btn-wrap .line {
    padding: 8px 0;
    border-left: solid 1px #e1e5e9
}

.alert-container .close {
    position: absolute;
    bottom: 70px;
    color: #ddd
}

.m-slider {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff
}

.m-slider .slider-content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch
}

.m-slider.on {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9999
}

.m-slider .slider-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    min-width: 100%;
    height: 100%;
    position: absolute;
    z-index: 102;
    left: 0
}

.m-slider .slider-info .item {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 45px 30px 0;
    height: 100%;
    overflow: hidden
}

.m-slider .slider-info .item .text {
    max-height: 80%;
    max-height: calc(100% - 80px);
    overflow: hidden;
    overflow-y: auto;
    word-break: break-all
}

.m-slider .slider-info .item .text .block {
    padding-bottom: 20px
}

.m-slider .slider-info .item .text .block > li {
    list-style: none;
    font-size: 12px;
    line-height: 1.7
}

.m-slider .slider-info .item .text .block:last-child {
    border: 0
}

.m-slider .slider-info .item .label {
    font-size: 15px;
    padding-bottom: 10px
}

.m-slider .slider-info .item .title {
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 700;
    text-align: center
}

.m-slider .close-wrapper {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
    z-index: 9999
}

.m-slider .close-wrapper .close {
    position: absolute;
    left: 50%;
    margin-left: -15px;
    bottom: 9px;
    z-index: 103;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border: 1px solid #1ba9ba;
    border-radius: 18px
}

.m-slider .close-wrapper .close::before, .m-slider .close-wrapper .close::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 80%;
    top: 50%;
    left: 3px;
    margin-top: -1px;
    background: #1ba9ba
}

.m-slider .close-wrapper .close::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg)
}

.m-slider .close-wrapper .close::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.m-slider .slider-dot {
    position: absolute;
    bottom: 45px;
    left: 0;
    right: 0;
    text-align: center
}

.m-slider .slider-dot .btn {
    margin: 5px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border: solid 1px #c7c7cc;
    -ms-border-radius: 50%;
    border-radius: 50%
}

.m-slider .slider-dot .on {
    background-color: #c7c7cc
}

.calendar-page {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    top: 0
}

.m-calendar {
    width: 100%;
    height: 100%;
    padding-top: 44px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.m-calendar .calendar-bar {
    width: 100%;
    z-index: 1001;
    background-color: #fff
}

.m-calendar .calendar-bar .calendar-select-bar {
    margin: 5px 10px;
    line-height: 38px;
    height: 38px;
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
}

.m-calendar .calendar-bar .calendar-select-bar .go-tab, .m-calendar .calendar-bar .calendar-select-bar .back-tab {
    position: relative;
    text-align: center;
    background-color: #eee;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.m-calendar .calendar-bar .calendar-select-bar .go-tab .selecting, .m-calendar .calendar-bar .calendar-select-bar .back-tab .selecting {
    border-bottom: 2px solid #1ba9ba
}

.m-calendar .calendar-bar .calendar-select-bar .go-tab {
    margin-right: 10px;
    -webkit-border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    border-radius: 10px 0 0 10px
}

.m-calendar .calendar-bar .calendar-select-bar .go-tab .select-bar, .m-calendar .calendar-bar .calendar-select-bar .go-tab .selecting {
    -webkit-border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    border-radius: 10px 0 0 10px
}

.m-calendar .calendar-bar .calendar-select-bar .back-tab {
    margin-left: 10px;
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    border-radius: 0 10px 10px 0
}

.m-calendar .calendar-bar .calendar-select-bar .back-tab .selecting, .m-calendar .calendar-bar .calendar-select-bar .back-tab .select-bar {
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    border-radius: 0 10px 10px 0
}

.m-calendar .calendar-bar .calendar-date-bar {
    height: 22px;
    border-bottom: 1px solid #dce1e6;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
}

.m-calendar .calendar-bar .calendar-date-bar .dates-item {
    font-size: 20px;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
    line-height: 15px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #000
}

.m-calendar .calendar-bar .calendar-date-bar .dates-item:first-child, .m-calendar .calendar-bar .calendar-date-bar .dates-item:last-child {
    color: #ff8205
}

.m-calendar .calendar-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch
}

.m-calendar .calendar-content .calender-month .calendar-month-title {
    color: #333;
    text-align: center;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #dce1e6;
    padding-top: 5px;
    margin-bottom: 8px
}

.m-calendar .calendar-content .calender-month:first-child .calendar-month-title {
    border: 0
}

.m-calendar .calendar-content .calender-month .calendar-week {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
}

.m-calendar .calendar-content .calender-month .calendar-week .calendar-day {
    position: relative;
    color: #000;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 18px
}

.m-calendar .calendar-content .calender-month .calendar-week .calendar-day .top-string {
    position: absolute;
    top: 3px;
    left: 0;
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 11px;
    -webkit-transform: scale(0.92);
    -moz-transform: scale(0.92);
    -ms-transform: scale(0.92);
    -o-transform: scale(0.92);
    transform: scale(0.92);
    color: #888
}

.m-calendar .calendar-content .calender-month .calendar-week .calendar-day .price-string {
    position: absolute;
    top: 36px;
    left: 0;
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 11px;
    -webkit-transform: scale(0.92);
    -moz-transform: scale(0.92);
    -ms-transform: scale(0.92);
    -o-transform: scale(0.92);
    transform: scale(0.92);
    color: #666
}

.m-calendar .calendar-content .calender-month .calendar-week .calendar-day .low-price-string {
    color: #ff8205
}

.m-calendar .calendar-content .calender-month .calendar-week .trust-day:not(.disable-day):active {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background-color: #1ba9ba
}

.m-calendar .calendar-content .calender-month .calendar-week .trust-day:not(.disable-day):active .day {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .trust-day:not(.disable-day):active .top-string {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .trust-day:not(.disable-day):active .price-string {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .trust-day:not(.disable-day):active:before {
    display: block;
    position: absolute;
    font-size: 11px;
    -webkit-transform: scale(0.92);
    -moz-transform: scale(0.92);
    -ms-transform: scale(0.92);
    -o-transform: scale(0.92);
    transform: scale(0.92);
    left: 50%;
    margin-left: -18px;
    top: 61%;
    width: 36px;
    height: 20px;
    line-height: 20px;
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .holiday .day {
    color: #ff8205
}

.m-calendar .calendar-content .calender-month .calendar-week .holiday .top-string {
    color: #ff8205
}

.m-calendar .calendar-content .calender-month .calendar-week .disable-day .day {
    color: #c7ced4
}

.m-calendar .calendar-content .calender-month .calendar-week .disable-day .top-string {
    color: #c7ced4
}

.m-calendar .calendar-content .calender-month .calendar-week .weekend-day .day {
    color: #ff8205
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day, .m-calendar .calendar-content .calender-month .calendar-week .select-single-day, .m-calendar .calendar-content .calender-month .calendar-week .select-back-day, .m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background-color: #1ba9ba
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day .day, .m-calendar .calendar-content .calender-month .calendar-week .select-single-day .day, .m-calendar .calendar-content .calender-month .calendar-week .select-back-day .day, .m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day .day {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day .top-string, .m-calendar .calendar-content .calender-month .calendar-week .select-single-day .top-string, .m-calendar .calendar-content .calender-month .calendar-week .select-back-day .top-string, .m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day .top-string {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day .price-string, .m-calendar .calendar-content .calender-month .calendar-week .select-single-day .price-string, .m-calendar .calendar-content .calender-month .calendar-week .select-back-day .price-string, .m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day .price-string {
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day:before, .m-calendar .calendar-content .calender-month .calendar-week .select-single-day:before, .m-calendar .calendar-content .calender-month .calendar-week .select-back-day:before, .m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day:before {
    display: block;
    position: absolute;
    font-size: 11px;
    -webkit-transform: scale(0.92);
    -moz-transform: scale(0.92);
    -ms-transform: scale(0.92);
    -o-transform: scale(0.92);
    transform: scale(0.92);
    left: 50%;
    margin-left: -18px;
    top: 61%;
    width: 36px;
    height: 20px;
    line-height: 20px;
    color: #fff
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-day:before {
    content: '\\53BB\\7A0B'
}

.m-calendar .calendar-content .calender-month .calendar-week .select-back-day:before {
    content: '\\8FD4\\7A0B'
}

.m-calendar .calendar-content .calender-month .calendar-week .select-go-back-day:before {
    content: '\\53BB+\\8FD4'
}

.m-calendar .calendar-content .calender-month .calendar-week .during-day {
    background-color: #f5f5f5
}

.m-calendar .calendar-content .calender-month .calendar-week .during-day .day {
    color: #1ba9ba
}

.m-calendar .calendar-content .calender-month .calendar-week .during-day .top-string {
    color: #1ba9ba
}

.m-calendar .calendar-quick-search {
    position: fixed;
    bottom: 12px;
    line-height: 40px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    background-color: #ff8205;
    margin-left: -40%;
    left: 50%;
    text-align: center;
    color: #fff;
    font-size: 18px
}

.calendar-hide {
    display: none
}

.m-noHeader-calendar {
    padding-top: 0
}

.m-noHeader-calendar .calendar-bar {
    top: 0
}

.citysearch {
    position: fixed;
    top: 0;
    height: 44px;
    background: #1ba9ba;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 200
}

.citysearch .go-back {
    display: block;
    padding: 0 10px 0 10px;
    line-height: 44px;
    position: relative;
    color: #fff;
    font-size: 14px
}

.citysearch .cancel {
    display: block;
    font-size: 14px;
    color: #7ff;
    width: 44px;
    height: 44px;
    position: absolute;
    right: -43px;
    background: #1ba9ba;
    line-height: 44px;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    -o-transition: -o-transform .2s;
    -moz-transition: transform .2s, -moz-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s, -moz-transform .2s, -o-transform .2s
}

.citysearch .search-input {
    height: 20px;
    padding: 5px 0;
    border: 0;
    outline: 0;
    margin: 7px 15px 0 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
    text-indent: 12px;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    float: left;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    -o-transition: -o-transform .2s;
    -moz-transition: transform .2s, -moz-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s, -moz-transform .2s, -o-transform .2s
}

.citysearch .clear {
    position: absolute;
    display: inline-block;
    width: 11px;
    height: 11px;
    background: #a6a6a6;
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    right: 62px;
    top: 16px
}

.citysearch .clear:after {
    content: '';
    display: block;
    width: 9px;
    height: 1px;
    background: #fff;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    top: 5px;
    left: 1px
}

.citysearch .clear:before {
    position: absolute;
    top: 5px;
    left: 1px;
    content: '';
    display: block;
    width: 9px;
    height: 1px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg)
}

.citysearch.active .search-input {
    text-align: left;
    -webkit-transform: translateX(-38px);
    -moz-transform: translateX(-38px);
    -ms-transform: translateX(-38px);
    -o-transform: translateX(-38px);
    transform: translateX(-38px);
    line-height: 20px
}

.citysearch.active .cancel {
    -webkit-transform: translateX(-38px);
    -moz-transform: translateX(-38px);
    -ms-transform: translateX(-38px);
    -o-transform: translateX(-38px);
    transform: translateX(-38px)
}

.search-dialog {
    position: fixed;
    top: 44px;
    background: #fff;
    width: 100%;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 99999;
    opacity: 1
}

.search-dialog .line {
    border-bottom: 1px solid #f5f5f5;
    font-size: 14px;
    color: #000;
    padding: 12px
}

.search-dialog .line .arrow {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 12px;
    border-left: 1px solid #a6a6a6;
    border-bottom: 1px solid #a6a6a6;
    overflow: hidden
}

.search-dialog .line .arrow:after {
    display: inline-block;
    position: absolute;
    border: 1px solid #a6a6a6;
    border-bottom-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    right: 0;
    bottom: 0;
    content: ''
}

.search-dialog .line .grey {
    color: #a6a6a6;
    font-size: 12px
}

.search-dialog .line .include {
    margin-left: 36px
}

.search-dialog .line .near {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #a6a6a6;
    color: #a6a6a6;
    font-size: 12px;
    margin-left: 30px;
    -webkit-transform: scale(0.8, 0.8);
    -moz-transform: scale(0.8, 0.8);
    -ms-transform: scale(0.8, 0.8);
    -o-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
    display: inline-block
}

.search-dialog .line .viewspot {
    background: #6fa92f;
    color: #fff;
    font-size: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px
}

.search-dialog .line .right {
    position: absolute;
    right: 0;
    font-size: 12px;
    margin-right: 15px
}

.search-dialog .line .ap {
    background: #2a96f3;
    color: #fff;
    font-size: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px
}

.search-dialog .line .city {
    background: #1ba9ba;
    color: #fff;
    font-size: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px
}

.search-dialog .line span {
    margin-left: 4px
}

.search-dialog .noSearch {
    background: #f5f5f5;
    border: 0
}

.search-dialog .noSearch.no-result {
    color: #555;
    text-align: center;
    background: #fff;
    line-height: 40px
}

.noresult-search-dialog {
    position: absolute;
    top: 44px;
    background: #000;
    opacity: .4;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #a6a6a6;
    z-index: 4
}

.g-tabItemList {
    height: 39px;
    line-height: 39px;
    width: 100%;
    border-bottom: 1px solid #eceff3;
    background: #fbfbfb
}

.g-tabItemList .g-tabItem {
    width: 50%;
    height: 38px;
    color: #888;
    font-size: 15px;
    display: inline-block;
    text-align: center;
    line-height: 39px
}

.g-tabItemList .g-tabItem.on {
    color: #1ba9ba;
    border-bottom: 2px solid #1ba9ba
}

.animate-init {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: -webkit-transform 300ms;
    transition: -webkit-transform 300ms;
    -o-transition: -o-transform 300ms;
    -moz-transition: transform 300ms, -moz-transform 300ms;
    transition: transform 300ms;
    transition: transform 300ms, -webkit-transform 300ms, -moz-transform 300ms, -o-transform 300ms;
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 100
}

.animate-start {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0)
}</style>
            `);
            this.jit = $("#" + contentId)
        }
    }

    getMonthItems(date) {
        let m = this.m;
        let start = m(date);
        let end = m(m(date).endOf("month")).endOf("week");
        var year = start.year();
        var month = start.month();
        let all = [];
        let week = start.week();
        let now = m(m(date).startOf("month")).startOf("week");
        for (; now.valueOf() <= end.valueOf(); now.add(1, "day")) {
            if (week != now.week()) {
                all.push(`</div><div class="calendar-week">`);
                week = now.week();
            }
            //不是这个月的就不显示
            let isNeedRender = (month == m(now).month());
            //未超过开始日期的不能选
            let canSelect = isNeedRender && now.valueOf() >= this._s.valueOf();
            let css = canSelect ? "" : "disable-day";
            let html = "";
            try {
                html = isNeedRender ? this.tplFun(now.format("YYYY-MM-DD"), now.format("D")) : "";
            } catch (e) {
            }
            let formatDate = now.format("YYYY/MM/DD")
            let data = canSelect ? ` data-date="${formatDate}" data-type="${isNeedRender}"` : "";
            all.push(` <div class="calendar-day ${css} trust-day" ${data}>${html}</div>`);

        }
        return `<div class="calender-month"><div class="calendar-month-title">${year}年${month + 1}月</div><div class="calendar-week">${all.join("\n")}</div></div>`;
    }


}