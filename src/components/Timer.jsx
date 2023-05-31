export const Timer = ({ time }) => {
  return (
    <>
      <div className="m-5 font-bold text-center font-sans text-5xl">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </>
  );
};
