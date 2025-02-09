export default function IconRender(props) {

    const squareData = [ 
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

    const circleData= [ 
        1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
        1, 2, 2, 2, 3, 3, 2, 2, 2, 1,
        1, 2, 3, 3, 4, 4, 3, 3, 2, 1,
        1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
        2, 3, 4, 5, 5, 5, 5, 4, 3, 2,
        2, 3, 4, 5, 5, 5, 5, 4, 3, 2,
        1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
        1, 2, 3, 3, 4, 4, 3, 3, 2, 1,
        1, 2, 2, 2, 3, 3, 2, 2, 2, 1,
        1, 1, 1, 1, 2, 2, 1, 1, 1, 1
    ]

    const crossData = [ 
            5, 4, 3, 2, 1, 1, 2, 3, 4, 5,
            4, 5, 4, 2, 2, 2, 2, 4, 5, 4,
            3, 4, 5, 4, 3, 3, 4, 5, 4, 3,
            2, 2, 4, 5, 4, 4, 5, 4, 3, 2,
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1,
            2, 3, 4, 5, 4, 4, 5, 4, 3, 2,
            3, 4, 5, 4, 3, 3, 4, 5, 4, 3,
            4, 5, 4, 3, 2, 2, 3, 4, 5, 4,
            5, 4, 3, 2, 1, 1, 2, 3, 4, 5
    ]

    var testData

    if(props.toxic_way == 10){
        testData = crossData
    }else if(props.toxic_way ==20){
        testData =circleData
    }else if(props.toxic_way == 30){
        testData = squareData
    }

    var colorData = props.colorData
  
    return (
        <div>
            <p>
                test123
            </p>
            <svg width = "100" height = "100"> { testData.map( (i, key) => {
                const rgb = `rgb(${colorData[i-1]})`
                return <rect x = {(key%10)*10} y = {(Math.floor(key/10))*10} width="10" height="10" fill= {rgb}/>
            } )}
                
            </svg>
      </div>
    )
  }

  