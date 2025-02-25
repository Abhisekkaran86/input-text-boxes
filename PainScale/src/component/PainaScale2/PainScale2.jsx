import React from 'react'
import Slider from './Slider';
const PainScale2 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <Slider id="slider1" />
        <Slider id="slider2" />
      </div>
    </div>
    )
}
export default PainScale2;
