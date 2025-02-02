export default function IconRender() {

    const testData = [ 
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 2, 3, 3, 3, 3, 3, 3, 2, 1,
        1, 2, 3, 4, 4, 4, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 4, 4, 4, 3, 2, 1,
        1, 2, 3, 3, 3, 3, 3, 3, 2, 1,
        1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const colorData = [ [255, 255, 255], 
                        [200, 200, 200],
                        [150, 150, 150],
                        [100, 100, 100],
                        [50 ,50, 50]        ]
  
    return (
        <div>
            <p>
                test123
            </p>
            <svg width = "100" height = "100"> { testData.map( (i, key) => {
                console.log(i)
                const rgb = `rgb(${colorData[i]})`
                console.log(rgb)
                return <rect x = {(key%10)*10} y = {(Math.floor(key/10))*10} width="10" height="10" fill= {rgb}/>
            } )}
                
            </svg>
      </div>
    )
  }

  