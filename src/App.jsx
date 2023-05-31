import { useState } from "react";
import { Timer } from "./components/Timer";
import { LapList } from "./components/LapList";
import { Controller } from "./components/Controller";
import { Form } from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(true);
  const [lap, setLap] = useState(0);
  const [listLap, setListLap] = useState([]);
  const [lapCount, setLapCount] = useState(1);
  const [toggleForm, setToggleForm] = useState(true);
  const [name, setName] = useState(
    localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );
  const [age, setAge] = useState(
    localStorage.getItem("age") ? localStorage.getItem("age") : ""
  );
  const [goal, setGoal] = useState(
    localStorage.getItem("goal") ? localStorage.getItem("goal") : ""
  );
  const [totalLaps, setTotalLaps] = useState([]);

  useEffect(() => {
    let interval = 0;

    if (running && !paused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        setLap((lap) => lap + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, paused]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  useEffect(() => {
    localStorage.setItem("goal", goal);
  }, [goal]);

  const handleStart = () => {
    setRunning(true);
    setPaused(false);
  };

  const handlePause = () => {
    setRunning(false);
    setPaused(true);
  };

  const handleReset = () => {
    setTime(0);
    setLap(0);
    setLapCount(1);
    setListLap([]);
    setTotalLaps([]);
    setRunning(false);
    setPaused(true);
  };

  const handleLap = () => {
    setLapCount(lapCount + 1);
    const myLap = {
      lapCount,
      lap,
      time,
    };
    setTotalLaps([...totalLaps, lap]);
    setListLap([...listLap, myLap]);
    setLap(0);
  };

  const handleTotal = () => {
    console.log(totalLaps);
    let sumLaps = totalLaps.length;
    let sumTime = 0;
    if (totalLaps.length > 0) {
      sumTime = totalLaps.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }
    alert(
      `Summary: \n Laps: ${sumLaps}\n Time: ${(
        "0" + Math.floor((sumTime / 60000) % 60)
      ).slice(-2)}:${("0" + Math.floor((sumTime / 1000) % 60)).slice(-2)}.${(
        "0" +
        ((sumTime / 10) % 100)
      ).slice(-2)}`
    );
  };

  return (
    <div className="pb-40">
      <Navbar handleReset={handleReset} setToggleForm={setToggleForm} />
      {toggleForm ? (
        <Form
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          goal={goal}
          setGoal={setGoal}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
        />
      ) : (
        <>
          <Timer time={time} />
          <Controller
            running={running}
            paused={paused}
            setRunning={setRunning}
            setPaused={setPaused}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
            handleLap={handleLap}
            handleTotal={handleTotal}
          />
          <LapList listLap={listLap} />
        </>
      )}
    </div>
  );
}

export default App;
