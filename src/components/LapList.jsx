import { Lap } from "./Lap";

export const LapList = ({ listLap, totalTime, totalLap }) => {
  return (
    <>
      <div className="my-10 flex justify-center text-center">
        <div className="w-1/4 bg-gray-200">Lap</div>
        <div className="w-1/4 bg-gray-200">Lap Time</div>
        <div className="w-1/4 bg-gray-200">Total Time</div>
      </div>
      <div className="my-5 pb-40">
        {listLap.map((lap) => (
          <Lap
            key={lap.lapCount}
            lapCount={lap.lapCount}
            lap={lap.lap}
            time={lap.time}
          />
        ))}
      </div>
    </>
  );
};
