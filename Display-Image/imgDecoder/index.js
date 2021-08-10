var png = require('png-js');

function get_PixelArray(Path, Name){
    let prcPixels = []
    let chars = [" ", ",", ":", ";", "I", "L", "T", "K", "N", "@"]

    let output = ""

    let path = Path + '\\' + Name

    if(!Name || Name.length < 1){
        path = Path
    }

    let image = png.load(path)
    png.decode(path, function (pixels) {
       let xI = Math.floor(image.width / 60)
       let yI = Math.floor(image.height / 60)
        
        if(xI < 1)
            xI = 1
        if(yI < 1)
            yI = 1
        for(let y = 0; y < image.height; y += yI){
            for(let x = 0; x < image.width; x += xI){

                let pixel = getFromPixelArray(x, y, image.width, pixels);
                if(pixel){
                    let avgCol = Math.floor((pixel.r + pixel.g + pixel.b) / 3);
                    prcPixels.push(chars[Math.floor(avgCol / 25)]);
                    prcPixels.push(" ")
                }
            }
            prcPixels.push("\n");
        }
        output = prcPixels.join("");
        console.log(output);
    })
    
}

function getFromPixelArray(x, y, width, pixels){
    let i = (x + y * width) * 4
    return {
        r: pixels[i],
        g: pixels[i + 1],
        b: pixels[i + 2],
    }
}


exports.get_PixelArray = get_PixelArray;