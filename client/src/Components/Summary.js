import React from "react";

export default function Summary({ summary, frontEndSkills, backEndSkills }) {
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
              value={frontEndSkills}
              placeholder="Front End Skills"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
            <input
              type="text"
              name="backEndSkills"
              value={backEndSkills}
              placeholder="Back End Skills"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
            <textarea className="textarea textarea-primary w-full m-3" value={summary} name="summary" placeholder="Summary..."></textarea>
          </div>
        </div>
    </div>
  );
}
