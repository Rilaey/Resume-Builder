import React, { useContext } from "react";
import { MyDataContext } from "../Pages/Home";

export default function EducationInformation() {
  const data = useContext(MyDataContext);

  const {
    awardReceived,
    school,
    schoolCity,
    schoolState,
    schoolSummary,
    schoolStartDate,
    schoolEndDate
  } = data;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="text-2xl m-5">Education</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-center items-center">
          <input
            type="text"
            name="school"
            value={school}
            placeholder="School"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolCity"
            value={schoolCity}
            placeholder="City"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolState"
            value={schoolState}
            placeholder="State"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          <input
            type="text"
            name="awardReceived"
            value={awardReceived}
            placeholder="Diploma"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolStartDate"
            value={schoolStartDate}
            placeholder="Start Date"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolEndDate"
            value={schoolEndDate}
            placeholder="End Date"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <textarea
            className="textarea textarea-primary w-full m-3"
            value={schoolSummary}
            name="jobSummary"
            placeholder="Job Summary"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
