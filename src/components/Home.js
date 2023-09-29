import React from 'react'
import { StickyNavbar } from './NavBar'
import Landing from './Landing'
import Testimonials from './Testimonials'
import Footer from './Footer'


export default function Home() {
  return (
    <div className="h-full bg-gradient-to-r from-sky-900 viaa-cyan-500 to-teal-600 ">
    <div className="">
      <Landing />
    </div>
    <div>
        <Testimonials />
    </div>
  </div>
  )
}
