import React, { useContext } from "react";
import { MyDataContext } from "../Pages/Home";

export default function Summary({ setFormState }) {
  const data = useContext(MyDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-wrap flex-col items-center justify-center">
      <div>
        <h2 className="text-2xl m-5">About You</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center align-center m-5">
        <div className="flex flex-wrap flex-row justify-center items-center align-center">
          <input
            type="text"
            name="frontEndSkills"
            value={data.frontEndSkills}
            onChange={handleInputChange}
            placeholder="Front End Skills"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="backEndSkills"
            value={data.backEndSkills}
            onChange={handleInputChange}
            placeholder="Back End Skills"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <textarea
            className="textarea textarea-primary w-full m-3"
            value={data.summary}
            onChange={handleInputChange}
            name="summary"
            placeholder="Summary..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
