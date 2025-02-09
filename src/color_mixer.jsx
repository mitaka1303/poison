export default function color_mixer(color1, color2) {

    // const color1 = [255, 255 ,255]
    // const color2 = [0,0 ,0]

    const n  = 5
    var x  = n-1
    var colorData =[]

    for(var i = 0 ; i < n ; i++){
        // const color = [ (color1[0]* i/n ) + (color2[0]* (n-i)/n) ,  (color1[1]* i/n ) + (color2[1]* (n-i)/n),  (color1[2]* i/n ) + (color2[2]* (n-i)/n) ]
        const color = [ Math.round(color1[0]* i/x ) + Math.round(color2[0]* (x-i)/x) ,  Math.round(color1[1]* i/x ) + Math.round(color2[1]* (x-i)/x),  Math.round(color1[2]* i/x ) + Math.round(color2[2]* (x-i)/x) ]
        colorData.push(color)
    }
    console.log(colorData)
    return colorData
  }

  