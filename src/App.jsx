import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconRender from './icon_render'
import color_mixer from './color_mixer'

function App() {
  const [count, setCount] = useState(0)

  const color1 = [255, 2, 0]
  const color2 = [0 , 21, 100]

  const colorData = color_mixer(color1, color2);
  console.log(colorData)


  return (
    <>
      <div>
        <IconRender colorData = {colorData} />
      </div>
    </>
  )
}

export default App
