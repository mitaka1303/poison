export default function IconRender() {

    const color1 = [255, 255 ,255]
    const color2 = [0,0 ,0]

    const n  = 10
    var colorData =[]

    for(i = 0 ; i < n ; i++){
        // const color = [ (color1[0]* i/n ) + (color2[0]* (n-i)/n) ,  (color1[1]* i/n ) + (color2[1]* (n-i)/n),  (color1[2]* i/n ) + (color2[2]* (n-i)/n) ]
        const color = [ Math.round(color1[0]* i/n ) + Math.round(color2[0]* (n-i)/n) ,  Math.round(color1[1]* i/n ) + Math.round(color2[1]* (n-i)/n),  Math.round(color1[2]* i/n ) + Math.round(color2[2]* (n-i)/n) ]
        colorData.push(color)
    }
    console.log(colorData)
  }

  