import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
    setNotifications([...notifications, `New event "${event.title}" created!`]);
  };

  const editEvent = (updatedEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
    setNotifications([...notifications, `Event "${updatedEvent.title}" updated!`]);
  };

  const deleteEvent = (eventId) => {
    const deletedEvent = events.find((event) => event.id === eventId);
    setEvents(events.filter((event) => event.id !== eventId));
    setNotifications([...notifications, `Event "${deletedEvent.title}" deleted!`]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent, notifications }}>
      {children}
    </EventContext.Provider>
  );
};
