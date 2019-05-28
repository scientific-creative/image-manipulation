var Jimp = require("jimp2");
 
// open a file called "lenna.png"
Jimp.read("test.jpg", function (err, image) {
    if (err) throw err;
    image.resize(256, Jimp.AUTO)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("test_r.jpg"); // save
    console.log (image.bitmap.width);
    console.log (image.bitmap.height);
});

Jimp.read ("test.jpg", function (err, image){
	image.greyscale();
	var testPixel = image.getPixelColor(818, 261);
	var testPixel = Jimp.intToRGBA(testPixel);
	console.log(testPixel);
});
