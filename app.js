var Jimp = require("jimp2");
 
Jimp.read("test.png", function (err, image) {
    if (err) throw err;
    image.greyscale();                 // set greyscale
         //.write("test_r.jpg"); // save
    var imageW = image.bitmap.width;
    var imageH = image.bitmap.height;
    var crossW = Math.floor(imageW / 3);
    var crossH = Math.floor(imageH / 3);
    var crossW = crossW * 3;
    var crossH = crossH * 3;
    var crossW = crossW - 1;
    var crossH = crossH - 1;
    console.log(imageW);
    console.log(imageH);
    console.log(crossW);
    console.log(crossH);
});

Jimp.read ("test.png", function (err, image){
	image.greyscale();
	var testPixel = image.getPixelColor(1, 1);
	var testPixel = Jimp.intToRGBA(testPixel);
	console.log(testPixel);
});
