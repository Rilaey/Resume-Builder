import React from 'react'
import ProfileNav from '../Components/ProfileNav'

export default function ProfileDashboard() {
  return (
    <div className='flex justify-center'>
      <div className='w-1/4'>
        <ProfileNav />
      </div>
      <div className='w-3/4' style={{ border: "3px solid red"}}>
        <h1>dashboard</h1>
      </div>
    </div>
  )
}
