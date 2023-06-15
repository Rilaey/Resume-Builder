import React from 'react'

export default function ProjectOneInformation({ title, gitHubLink, applicationLink, keyPointOne, keyPointTwo, keyPointThree, frontTools, backTools }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <h2 className='text-2xl m-5'>Project One Information</h2>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="gitHubLink"
              value={gitHubLink}
              placeholder="Github Repo Link"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="applicationLink"
              value={applicationLink}
              placeholder="Live Application Link"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>

        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="frontTools"
              value={frontTools}
              placeholder="Front End Tools Used"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="backTools"
              value={backTools}
              placeholder="Back End Tools Used"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <textarea className="textarea textarea-primary w-full m-3" value={keyPointOne} name="keyPointOne" placeholder="Key Point One"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={keyPointTwo} name="keyPointTwo" placeholder="Key Point Two"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={keyPointThree} name="keyPointThree" placeholder="Key Point Three"></textarea>
        </div>
      </div>
    </div>
  )
}
