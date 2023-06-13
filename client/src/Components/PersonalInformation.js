import React from 'react'

export default function PersonalInformation({ firstName, lastName, phoneNumber, email, linkedIn, gitHub, portfolio}) {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center mt-5'>
        <div>
            <h2 className='text-2xl m-5'>Personal Information</h2>
        </div>
        <div className='flex flex-col flex-wrap justify-center items-center align-center m-5'>
            <div className='flex flex-row flex-wrap justify-center items-center align-center'>
                <input type="text" placeholder="First Name" className="input input-bordered input-primary  max-w-xs m-3" />
                <input type="text" placeholder="Last Name" className="input input-bordered input-primary  max-w-xs m-3" />
                <input type="number" placeholder="Phone Number" className="input input-bordered input-primary  max-w-xs m-3" />
            </div>
            <div className='flex flex-wrap flex-row justify-center items-center align-center'>
                <input type="email" placeholder="Email" className="input input-bordered input-primary  max-w-xs m-3" />
                <input type="text" placeholder="LinkedIn" className="input input-bordered input-primary  max-w-xs m-3" />
                <input type="text" placeholder="Github" className="input input-bordered input-primary  max-w-xs m-3" />
                <input type="text" placeholder="Portfolio" className="input input-bordered input-primary  max-w-xs m-3" />
            </div>
        </div>
    </div>
  )
}
