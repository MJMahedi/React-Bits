import React from 'react'
import { useBatteryStatus } from 'react-haiku';

const BatteryStatus = () => {
    const {level, isCharging} = useBatteryStatus();
console.log("Hello from Battery status")
  return (
    <div className='bg-danger '>
     <div className=''>
        <p>Battery Level: {level}</p>
        <p>Is Battery Charging: {isCharging ? "True" : "False"}</p>
      </div> 
    </div>
  )
}

export default BatteryStatus
