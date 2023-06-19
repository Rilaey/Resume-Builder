import React from 'react'
import SignUpResumePic from "../images/sign-up-resume.jpeg";

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center m-5'>
      <div>
        <img src={SignUpResumePic} alt='resume' className='h-72 rounded-3xl'/>
      </div>
      <div>
        <form className='flex flex-col items-center justify-center'>
          <div className='flex'>
            <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs  m-5 " />
            <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs m-5 " />
          </div>
          <div className='flex'>
            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs  m-5 " />
            <input type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs m-5 " />
          </div>
          <div>
            <p>Already have an account? Click <a href='/signIn' className='underline'>Here</a> </p>
          </div>
          <div>
            <button type="submit" className="btn btn-success m-5"> Sign Up </button>
          </div>
        </form>
      </div>
    </div>
  )
}
