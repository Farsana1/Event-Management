import React from 'react';
import Hero from '../components/Hero';
import EventList from '../components/EventList';
import About from '../components/About';
import Contact from '../components/Contact';

function Home({setIsLogged}) {
  const username = localStorage.getItem('username');
 if (!username){
  setIsLogged(false);
 }

  return (
    <div>
      <Hero />
      {username && <EventList />}
    </div>
  );
}

export default Home;
