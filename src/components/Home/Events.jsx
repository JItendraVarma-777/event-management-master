import React, { useEffect, useState } from 'react';
import { getEvents } from '../../Data/data';
import EventService from '../reusable/EventService';
import EventItem from './EventItem';
import Footer from './Footer';

const Events = ({ admin }) => {
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    let isCancelled = false;

    EventService.getAllEvents().then((data) => {
      if (!isCancelled) {
        setEvents(data.data);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [events]);
  // useEffect(() => {
  //   console.log("updat");
  //   EventService.getAllEvents().then(data =>{
      
  //     setEvents(data.data);
  //   })
  // }, []);



  return (
    <div>
    <div className="container-fluid mt-5 events">
      {events.map((event) => (
        <EventItem
          admin={admin}
          key={event.id}
          event={event}
          className="event"
        />
      ))}
    </div>
    
        
    </div>
  );
};

export default Events;
