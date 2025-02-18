import React, { useEffect, useState } from 'react';
import { FaMeh, FaFrown, FaRegFrown, FaSadTear, FaSadCry } from 'react-icons/fa';
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import "./PainScoreProgressBar.css"

const PainScale = () => {
  const [painLevel, setPainLevel] = useState(0);
  // const [drugVolume, setDrugVolume] = useState(0);

  const painColors = [
    ' bg-green-500 border-green-500  ',  // 0
    ' bg-green-400 border-yellow-400  ',  // 1
    ' bg-yellow-300 border-orange-300  ', // 2
    ' bg-yellow-400 border-gray-400  ', // 3
    ' bg-orange-500 border-pink-500  ', // 4
    ' bg-orange-600 border-cyan-600  ', // 5
    ' bg-red-500 border-red-500  ',    // 6
    ' bg-red-600 border-blue-600  ',    // 7
    ' bg-red-700 border-red-700  ',    // 8
    ' bg-red-800 border-violet-800  ',    // 9
    ' bg-red-900 border-indigo-900  ',    // 10
  ];

  const emojis = [
    <BsEmojiSmileFill className=" text-green-500 text-6xl " />,  // 0 (No Pain)
    <FaMeh className="text-yellow-400 text-6xl " />,      // 1 (Mild Pain)
    <FaFrown className="text-orange-500 text-6xl" />,    // 2 (Moderate Pain)
    <BsFillEmojiFrownFill className="text-red-500 text-6xl" />,    // 3 (Severe Pain)
    <FaSadTear className="text-red-700 text-6xl" />,     // 4 (Very Severe Pain)
    <FaSadCry className="text-red-900 text-6xl fill-current" />       // 5 (Worst Pain Possible)
  ];

  const painDescriptions = [
    'No Pain', 'Mild Pain', 'Moderate Pain', 'Severe Pain', 'Very Severe Pain', 'Worst Pain Possible'
  ];

  const handlePainLevelChange = (level) => {
    setPainLevel(level);
    // setDrugVolume(level * 10); // Example calculation for drug volume
  };

  useEffect(() => {

  }, [painLevel])

  return (
    <div className="bg-amber-50 shadow-2xl rounded-4xl p-5 w-full max-w-6xl text-center mx-auto flex flex-col">
      <h1 className="text-2xl font-extrabold mb-5 text-blue-600 ">Pain Scale</h1>
      <div className="flex flex-col items-center mb-5 ">


        <div className="flex  w-full mb-5 justify-center   ">

          {

            [0, 1, 2, 3, 4,].map((val, index) => (
              <div
                key={index}
                className='w-2/12 border-e  '

              ><div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={painLevel}
                onChange={(e) => setPainLevel(Number(e.target.value))}
                className="range-slider "
                style={{
                  WebkitAppearance: 'none', // For Webkit browsers like Chrome/Safari
                  appearance: 'none', // Remove default styles
                }}
              />
            </div>
                <div className='w-full flex justify-center items-center  '>
                  

                  <div className='  h-20  flex items-end border-e w-full'>
                    {index + val}

                  </div>

                  <div className='  h-20  flex items-end   w-full'>
                    {index + val + 1}

                  </div>
                </div>





                <div className='w-full   relative flex justify-center items-center'>


                  <div className='w-full flex justify-center items-center h-16    '>

                    <div onClick={() => { setPainLevel(index + val); }} className={`z-10  not-last: flex-col w-1/2 flex-1 h-16 flex items-center justify-center cursor-pointer transition-colors duration-200 ${painLevel === index ? 'text-white font-bold' : 'text-black'
                      } ${painColors[index + val]} p-1 `}>

                    </div>


                    <div onClick={() => { setPainLevel(index + val + 1) }} className={`flex-col   w-1/2 flex-1 h-16 flex  z-10 items-center justify-center cursor-pointer transition-colors duration-200 ${painLevel === index ? 'text-white font-bold' : 'text-black'
                      } ${painColors[index + val + 1]} p-1  `}>

                    </div>


                  </div>


                  <div className='w-full flex justify-center items-center absolute      h-16 '>


                    <div className={`flex-col    w-1/2    h-24 rounded-full inset-shadow  flex items-center justify-center cursor-pointer transition-colors duration-200
                   
                     ${(index + val) == painLevel ? painColors[painLevel] : '     '}`}>

                      {/* {painLevel} {index + val } */}
                    </div>

                    <div className={`flex-col w-1/2   
                  ${(index + val + 1) == painLevel ? painColors[painLevel] : '    '} 
                    flex-1 h-24 rounded-full     items-center justify-center cursor-pointer transition-colors duration-200 
                   
                   p-1  `}>
                      {/* {painLevel},{index + val + 1} */}
                    </div>
                  </div>

                </div>

                <div className='w-full flex justify-center items-center h-20 bg-red- 500 '>
                  {emojis[index]}

                </div>
                <span className="text-xl text-gray-600 font-semibold text-">{painDescriptions[index]}</span>
              </div>

            ))}


        </div>


      </div>
    </div>
  );
};

export default PainScale;