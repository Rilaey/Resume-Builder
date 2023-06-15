import React from 'react'

export default function ExperienceInformation({ jobTitle, startDate, endDate, company, locationCity, locationState, jobSummary, keyAccomplishmentOne, keyAccomplishmentTwo }) {
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
              value={jobTitle}
              placeholder="Job Title"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Start Date"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="endDate"
              value={endDate}
              placeholder="End Date"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>

        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="company"
              value={company}
              placeholder="Company"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="locationCity"
              value={locationCity}
              placeholder="City"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="locationState"
              value={locationState}
              placeholder="State"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <textarea className="textarea textarea-primary w-full m-3" value={jobSummary} name="jobSummary" placeholder="Job Summary"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={keyAccomplishmentOne} name="keyAccomplishmentOne" placeholder="Key Accomplishment One"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={keyAccomplishmentTwo} name="keyAccomplishmentTwo" placeholder="Key Accomplishment Two"></textarea>
        </div>
      </div>
    </div>
  )
}
