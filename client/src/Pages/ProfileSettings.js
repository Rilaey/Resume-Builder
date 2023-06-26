import React from 'react'
import ProfileNav from '../Components/ProfileNav'

export default function ProfileSettings() {
  return (
    <div className='flex justify-center'>
      <div className='w-1/4'>
        <ProfileNav />
      </div>
      <div className='w-3/4'>
        <h1>profile settings</h1>
      </div>
    </div>
  )
}
