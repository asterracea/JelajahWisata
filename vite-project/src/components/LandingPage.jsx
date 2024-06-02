import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className=''>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}
