import { useState } from "react";

export const Controller = ({
  setRunning,
  setPaused,
  running,
  paused,
  handleStart,
  handlePause,
  handleReset,
  handleLap,
  handleTotal,
}) => {
  const [buttonColor, setButtonColor] = useState("green");
  const [buttonText, setButtonText] = useState("Start");

  const hanldeStartStopButton = () => {
    if (!running && paused) {
      setButtonColor("red");
      setButtonText("Pause");
      handleStart();
    } else {
      setButtonColor("green");
      setButtonText("Resume");
      handlePause();
    }
  };

  const handleResetButton = () => {
    if (!running && paused) {
      handleTotal();
      setButtonText("Start");
      setButtonColor("green");
      handleReset();
    }
  };

  const handleLapButton = () => {
    if (running && !paused) {
      handleLap();
    }
  };

  return (
    <div className="m-5 my-10 flex justify-center space-x-4">
      <button
        className="bg-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-400"
        onClick={handleLapButton}
      >
        Lap
      </button>
      <button
        className={`bg-${buttonColor}-500 text-white px-4 py-2 rounded cursor-pointer`}
        onClick={hanldeStartStopButton}
      >
        {buttonText}
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-400"
        onClick={handleResetButton}
      >
        Reset
      </button>
    </div>
  );
};
