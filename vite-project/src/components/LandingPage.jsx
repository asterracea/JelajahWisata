import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from '../pages/Home.jsx'
import Explore from '../pages/Explore.jsx'
export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col">
                    <Nav/>
                    <div className="flex-1 min-h-0">
                    <Outlet/>
                    </div>
                    
                </div>
                <Footer/>
    </>
  )
}
