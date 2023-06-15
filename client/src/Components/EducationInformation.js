import React, { useContext } from "react";
import { MyDataContext } from "../Pages/Home";

export default function EducationInformation({ setFormState}) {
  const data = useContext(MyDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

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
            value={data.school}
            onChange={handleInputChange}
            placeholder="School"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolCity"
            value={data.schoolCity}
            onChange={handleInputChange}
            placeholder="City"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolState"
            value={data.schoolState}
            onChange={handleInputChange}
            placeholder="State"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          <input
            type="text"
            name="awardReceived"
            value={data.awardReceived}
            onChange={handleInputChange}
            placeholder="Diploma"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolStartDate"
            value={data.schoolStartDate}
            onChange={handleInputChange}
            placeholder="Start Date"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
          <input
            type="text"
            name="schoolEndDate"
            value={data.schoolEndDate}
            onChange={handleInputChange}
            placeholder="End Date"
            className="input input-bordered input-primary  max-w-xs m-3"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <textarea
            className="textarea textarea-primary w-full m-3"
            value={data.schoolSummary}
            onChange={handleInputChange}
            name="schoolSummary"
            placeholder="School Summary"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
