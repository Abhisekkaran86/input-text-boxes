import React,{useState,useRef,useEffect} from "react";
const Painscale = ({
  inputValue = 0,
  startRange = 1,
  endRange = 100,
  name = '',
  onChange = (e) => console.log('New Value:', e)
}) => {
  const [value, setValue] = useState(Math.max(startRange, Math.min(inputValue, endRange)));
  const rangeRef = useRef(null);
  const draggingRef = useRef(false);


  // Update value when inputValue, startRange, or endRange changes
  useEffect(() => {
    setValue(Math.max(startRange, Math.min(inputValue, endRange)));
  }, [inputValue, startRange, endRange]);


  const getState = (val) => {
    const rangeStep = (endRange - startRange) / 4;
    if (val < startRange + rangeStep) return "low";
    if (val < startRange + rangeStep * 2) return "med-low";
    if (val < startRange + rangeStep * 3) return "med-high";
    return "high";
  };


  const stateColors = {
    "low": "border-green-500 bg-green-300",
    "med-low": "border-yellow-500 bg-yellow-300",
    "med-high": "border-orange-500 bg-orange-300",
    "high": "border-red-500 bg-red-300",
  };


  const handleMouseDown = () => {
    draggingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };


  const handleMouseMove = (e) => {
    if (draggingRef.current && rangeRef.current) {
      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue = Math.round(percentage * (endRange - startRange) + startRange);
      setValue(newValue);
    }
  };


  const handleMouseUp = (e) => {
    if (draggingRef.current && rangeRef.current) {
      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const finalValue = Math.round(percentage * (endRange - startRange) + startRange);
      setValue(finalValue);
      onChange({ target: { name, value: finalValue } });
    }
    draggingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };


  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);


  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md select-none px-4 sm:px-0 ml-5">
      <div className="relative w-full max-w-full h-12 flex items-center" ref={rangeRef}>
        <input
          type="range"
          min={startRange}
          max={endRange}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none bg-transparent"
        />
        <div
          className="absolute w-full h-2 rounded-lg bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500"
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', height: '15px' }}
        />
        <div
          className={`absolute w-10 h-10 border-4 rounded-full shadow-lg cursor-pointer transition-transform active:scale-110 flex items-center justify-center text-black font-bold ${stateColors[getState(value)]}`}
          style={{ left: `calc(${((value - startRange) / (endRange - startRange)) * 100}% - 20px)`, top: "50%", transform: "translateY(-50%)" }}
          onMouseDown={handleMouseDown}
        >
          {value}
        </div>
      </div>
    </div>
  );
};


export default Painscale;



