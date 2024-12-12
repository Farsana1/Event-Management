import React, { useState } from 'react'
import Hero from '../components/Hero'
import EventList from '../components/EventList'

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