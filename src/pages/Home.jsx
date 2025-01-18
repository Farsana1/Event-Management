import React from 'react';
import EventList from '../components/EventList';

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
