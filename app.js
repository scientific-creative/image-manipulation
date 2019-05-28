var Jimp = require("jimp2");
 
// open a file called "lenna.png"
Jimp.read("test.png", function (err, image) {
    if (err) throw err;
    image.greyscale();                 // set greyscale
         //.write("test_r.jpg"); // save
    console.log (image.bitmap.width);
    console.log (image.bitmap.height);
});

Jimp.read ("test.png", function (err, image){
	image.greyscale();
	var testPixel = image.getPixelColor(1, 1);
	var testPixel = Jimp.intToRGBA(testPixel);
	console.log(testPixel);
});
