import React, { useContext } from 'react'
import { MyDataContext } from "../Pages/Home";

export default function ExperienceInformation({ setFormState }) {
  const data = useContext(MyDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <h2 className='text-2xl m-5'>Experience</h2>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="jobTitle"
              value={data.jobTitle}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="startDate"
              value={data.startDate}
              onChange={handleInputChange}
              placeholder="Start Date"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="endDate"
              value={data.endDate}
              onChange={handleInputChange}
              placeholder="End Date"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>

        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="company"
              value={data.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="locationCity"
              value={data.locationCity}
              onChange={handleInputChange}
              placeholder="City"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="locationState"
              value={data.locationState}
              onChange={handleInputChange}
              placeholder="State"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <textarea className="textarea textarea-primary w-full m-3" value={data.jobSummary} onChange={handleInputChange} name="jobSummary" placeholder="Job Summary"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={data.keyAccomplishmentOne} onChange={handleInputChange} name="keyAccomplishmentOne" placeholder="Key Accomplishment One"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={data.keyAccomplishmentTwo} onChange={handleInputChange} name="keyAccomplishmentTwo" placeholder="Key Accomplishment Two"></textarea>
        </div>
      </div>
    </div>
  )
}
