import React, { useState } from 'react'
import Hero from '../components/Hero'
import EventList from '../components/EventList'
import About from '../components/About'
import Contact from '../components/Contact'


function Home({ username}) {
console.log(username);


  return (
    <div>
      <Hero />
      <EventList/>



    </div>
  )
}

export default Home 