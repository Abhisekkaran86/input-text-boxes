import React, { useState } from "react";

const Slider = ({ id }) => {

  const [value, setValue] = useState(20);
  const sliderStates = [
    {
      name: "low",
      tooltip:
        "Great, we're confident we can complete your project within <strong>24 hours</strong> of launch.",
      range: [...Array(21).keys()].map((x) => x + 5),
    },
    {
      name: "med",
      tooltip:
        "Looks good! We can complete a project of this size within <strong>48 hours</strong> of launch.",
      range: [...Array(25).keys()].map((x) => x + 26),
    },
    {
      name: "high",
      tooltip:
        "With a project of this size we'd like to talk with you before setting a completion timeline.",
      range: [51],
    },
  ];

  const currentState = sliderStates.find((state) =>
    state.range.includes(parseInt(value))
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <label htmlFor={id} className="font-bold text-sm text-gray-700">
        Panel Size
      </label>
      <div className="relative w-full">
        <input
          type="range"
          id={id}
          name="participants"
          min="5"
          max="51"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            background: "linear-gradient(to right, #4bc67d 30%, #f1c40f 45%, #b94a48 99%)",
          }}
        />
        <div
          className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-white text-sm font-bold flex items-center justify-center w-10 h-10 border-4 rounded-full shadow-md"
          style={{
            borderColor:
              currentState?.name === "low"
                ? "#4bc67d"
                : currentState?.name === "med"
                  ? "#f1c40f"
                  : "#b94a48",
          }}
        >
          {value}
        </div>
      </div>
      <span
        className={`text-sm font-semibold p-2 rounded-md ${currentState?.name === "low"
            ? "text-green-600"
            : currentState?.name === "med"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        dangerouslySetInnerHTML={{ __html: currentState?.tooltip }}
      />
    </div>
  );

};

export default Slider;
