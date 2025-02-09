import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconRender from './icon_render'
import color_mixer from './color_mixer'
import Form from './form'

function App() {
  const [toxic_way, set_toxic_way] = useState(10)

  const color1 = [255, 2, 200]
  const color2 = [100 , 21, 100]

  const colorData = color_mixer(color1, color2);


  return (
    <>
      <div>
        <Form set_toxic_way={set_toxic_way}/>
        <IconRender colorData = {colorData} toxic_way={toxic_way} />
      </div>
    </>
  )
}

export default App
