import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconRender from './icon_render'
import color_mixer from './color_mixer'
import Form from './form'

function App() {
  const [toxic_way, set_toxic_way] = useState(10)

  const [toxic_color1, set_toxic_color1] = useState([255, 2, 200])
  const [toxic_color2, set_toxic_color2] = useState([2, 200, 200])


  const colorData = color_mixer(toxic_color1, toxic_color2);


  return (
    <>
      <div>
        <Form set_toxic_way={set_toxic_way}/>
        <toxic_form set_toxic_color1={set_toxic_color1}/>
        <toxic_form set_toxic_color2={set_toxic_color2}/>
        <IconRender colorData = {colorData} toxic_way={toxic_way} />
      </div>
    </>
  )
}

export default App
