import React, { useContext } from 'react'
import { MyDataContext } from "../Pages/Home";

export default function ProjectInformation({ setFormState }) {
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
        <h2 className='text-2xl m-5'>Projects</h2>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="gitHubLink"
              value={data.gitHubLink}
              onChange={handleInputChange}
              placeholder="Github Repo Link"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="applicationLink"
              value={data.applicationLink}
              onChange={handleInputChange}
              placeholder="Live Application Link"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>

        <div className='flex flex-row flex-wrap justify-center items-center'>
          <input
              type="text"
              name="frontTools"
              value={data.frontTools}
              onChange={handleInputChange}
              placeholder="Front End Tools Used"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
          <input
              type="text"
              name="backTools"
              value={data.backTools}
              onChange={handleInputChange}
              placeholder="Back End Tools Used"
              className="input input-bordered input-primary  max-w-xs m-3"
            />
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          <textarea className="textarea textarea-primary w-full m-3" value={data.keyPointOne} onChange={handleInputChange} name="keyPointOne" placeholder="Key Point One"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={data.keyPointTwo} onChange={handleInputChange} name="keyPointTwo" placeholder="Key Point Two"></textarea>
          <textarea className="textarea textarea-primary w-full m-3" value={data.keyPointThree} onChange={handleInputChange} name="keyPointThree" placeholder="Key Point Three"></textarea>
        </div>
      </div>
    </div>
  )
}
