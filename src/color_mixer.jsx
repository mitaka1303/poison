export default function color_mixer(_color1, _color2) {

    var color1 = _color1
    var color2 = _color2

    const n  = 5
    var x  = n-1
    var colorData =[]

    if(JSON.stringify(color1) === JSON.stringify(color2)){
        color2 =[255, 255, 255]
    }

    for(var i = 0 ; i < n ; i++){
        // const color = [ (color1[0]* i/n ) + (color2[0]* (n-i)/n) ,  (color1[1]* i/n ) + (color2[1]* (n-i)/n),  (color1[2]* i/n ) + (color2[2]* (n-i)/n) ]
        const color = [ Math.round(color1[0]* i/x ) + Math.round(color2[0]* (x-i)/x) ,  Math.round(color1[1]* i/x ) + Math.round(color2[1]* (x-i)/x),  Math.round(color1[2]* i/x ) + Math.round(color2[2]* (x-i)/x) ]
        colorData.push(color)
    }
    console.log(colorData)
    return colorData
  }

  