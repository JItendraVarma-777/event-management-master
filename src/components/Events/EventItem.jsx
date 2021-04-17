import React from 'react';
import { Link } from 'react-router-dom';
import EventService from '../reusable/EventService';
const EventItem = ({ event, admin }) => {
  const deleteEvent = (id) => {
    EventService.deleteEvent(id).then((res) => {
      alert('deleted');
    });
  };
  return (
    <div>
      <div className="card">
        {' '}
        <img src={event.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>{' '}
          <div className="h5 ">Price: {event.amount} per Head</div>
          <div className="h5">Event Date:{event.eventDate}</div>
          <div className="h5">Location: {event.venue}</div>
          <div className="h5">
            Timings:{event.startTime} To {event.endTime}
          </div>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/register/${event.id}`} className="btn btn-success">
              Go Register
            </Link>
            {admin && (
              <button
                onClick={() => deleteEvent(event.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
