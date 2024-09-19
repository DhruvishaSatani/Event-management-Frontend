import React, { useContext } from 'react';
import { EventContext } from '../Context/EventContext';
import EventForm from './Notification';

const EventList = () => {
  const { events, deleteEvent } = useContext(EventContext);
  const [editingIndex, setEditingIndex] = React.useState(null);

  return (
    <div>
      <h3>Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <EventForm existingEvent={event} index={index} />
            ) : (
              <div>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.maxAttendees}</p>
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => deleteEvent(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
