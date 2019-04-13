// label.js
var _a = require('spritejs'), Scene = _a.Scene, Label = _a.Label;
var fs = require('fs');
var writeFileAsync = think.promisify(fs.writeFile, fs);
(function () {
    // 创建scene和layer
    var scene = new Scene('#paper', { resolution: [1200, 1200] });
    var fglayer = scene.layer('fglayer');
    // 创建label并设置属性
    var text1 = new Label('Hello World !');
    text1.attr({
        anchor: [0.5, 0.5],
        pos: [600, 600],
        font: 'bold 48px Arial',
        color: '#ffdc45'
    });
    // 将label添加到layer上，并将将canvas存为图片
    fglayer.append(text1);
    yield fglayer.prepareRender();
    yield writeFileAsync('spritejs.png', fglayer.canvas.toBuffer());
}());
--;
--;
--;
--;
--;
--;
--;
--;
--;
-- -
    作者;
weixin_34238633;
来源;
CSDN;
原文;
https: //blog.csdn.net/weixin_34238633/article/details/87943335 
 版权声明;
本文为博主原创文章;
转载请附上博文链接;
