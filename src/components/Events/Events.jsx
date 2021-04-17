import React, { useState } from 'react';
import { getEvents } from '../../Data/data';
import EventService from '../reusable/EventService';
import EventItem from './EventItem';

const Events = ({ admin }) => {
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    let isCancelled = false;

    // EventService.getAllEvents().then((data) => {
    //   if (!isCancelled) {
    //     setEvents(data.data);
    //   }
    // });
    setEvents(getEvents);

    return () => {
      isCancelled = true;
    };
  }, [events]);

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
