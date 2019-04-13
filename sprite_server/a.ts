// label.js
const {Scene,Label} = require('spritejs');
const fs = require('fs');
const writeFileAsync = think.promisify(fs.writeFile, fs);
 
(function () {
  // 创建scene和layer
  const scene = new Scene('#paper', {resolution: [1200, 1200]});
  const fglayer = scene.layer('fglayer');
  
  // 创建label并设置属性
  const text1 = new Label('Hello World !');
  text1.attr({
    anchor: [0.5, 0.5],
    pos: [600, 600],
    font: 'bold 48px Arial',
    color: '#ffdc45',
  });
  
  // 将label添加到layer上，并将将canvas存为图片
  fglayer.append(text1);
  await fglayer.prepareRender();
  await writeFileAsync('spritejs.png', fglayer.canvas.toBuffer());
}()); 