export const Form = ({
  name,
  setName,
  age,
  setAge,
  goal,
  setGoal,
  toggleForm,
  setToggleForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nAge: ${age}\nGoal: ${goal}`);
    setToggleForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-md p-5 w-1/2 md:w-1/2 mx-auto mt-10 mb-auto"
    >
      <div className="mb-4">
        <label className="block mb-2 font-bold">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => {
            if (e.target.value >= 0) {
              setAge(e.target.value);
            }
          }}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Goal of the session:</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};
