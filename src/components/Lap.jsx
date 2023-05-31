export const Lap = ({ lapCount, lap, time }) => {
  return (
    <div className="flex justify-center text-center my-3">
      <div className="w-1/4 bg-gray-200 mx-2 rounded-md">{lapCount}</div>
      <div className="w-1/4 bg-gray-200 mx-2 rounded-md">
        <span>{("0" + Math.floor((lap / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((lap / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((lap / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="w-1/4 bg-gray-200 mx-2 rounded-md">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};
