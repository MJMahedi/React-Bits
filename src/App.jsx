import { useState } from 'react'
import './App.css'
import SplitText from './Components/SplitText'
import BatteryStatus from './Components/BatteryStatus'

function App() {
 

  return (
    <>
      <div>
        <h1 class="text-3xl font-bold underline">React Bits Exploring</h1>
        <SplitText />
        <BatteryStatus />
      </div>
    </>
  )
}

export default App
