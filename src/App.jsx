import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconRender from './icon_render'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <IconRender />
      </div>
    </>
  )
}

export default App
