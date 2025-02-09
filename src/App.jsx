import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconRender from './icon_render'
import color_mixer from './color_mixer'
import Form from './form'

function App() {
  const [count, setCount] = useState(0)

  const color1 = [255, 2, 20]
  const color2 = [10 , 21, 100]

  const colorData = color_mixer(color1, color2);
  console.log(colorData)


  return (
    <>
      <div>
        <Form/>
        <IconRender colorData = {colorData} />
      </div>
    </>
  )
}

export default App
