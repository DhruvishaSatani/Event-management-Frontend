import React, { useState, useContext } from 'react';
import { EventContext } from '../../Context/EventContext';
import Notification from '../Notification';
import './Home.css'

function Home() {
  const { events, addEvent, editEvent, deleteEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({
    id: null,
    title: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: '',
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  // const albumms=()=>{
  //   fetch('https://jsonplaceholder.typicode.com/photos/5')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (isEdit) {
      editEvent(eventDetails);
    } else {
      addEvent({ ...eventDetails, id: Date.now() });
    }
    clearForm();
  };

  const clearForm = () => {
    setEventDetails({
      id: null,
      title: '',
      description: '',
      date: '',
      location: '',
      maxAttendees: '',
    });
    setIsEdit(false);
  };

  const handleEdit = (event) => {
    setEventDetails(event);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <div>
        <div className='home-box'>
        <h2 className='heading'>{isEdit ? 'Edit Event' : 'Create Event'}</h2>
      <form onSubmit={handleCreateEvent}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventDetails.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={eventDetails.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={eventDetails.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxAttendees"
          placeholder="Max Attendees"
          value={eventDetails.maxAttendees}
          onChange={handleChange}
        />

        <br></br>
        <button className='btn' type="submit">{isEdit ? 'Update Event' : 'Create Event'}</button>
        {isEdit && <button onClick={clearForm}>Cancel</button>}
      </form>
      </div>

       <div className='second-box'>
       <h2 className='heading'>Events</h2>


      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.location} on {event.date}<br></br>
            <button className='click' onClick={() => handleEdit(event)}>Edit</button>
            <button className='click' onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>

       
   

      <Notification />
       </div>
    </div>
  );
}

export default Home;
