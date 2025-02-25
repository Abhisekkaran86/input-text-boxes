import { useState } from 'react'

import './App.css'
import PainScale from './component/Painscale/PainScale'
import PainScale2 from './component/PainaScale2/Slider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PainScale/>

      {/* <PainScale2/> */}
        
    </>
  )
}

export default App
