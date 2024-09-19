import React, { useContext } from 'react';
import { EventContext } from '../Context/EventContext';

function Notification() {
  const { notifications } = useContext(EventContext);

  return (
    <div>
      <h3>Notifications</h3>
      {/* {alert (
            <ul>
       
            {notifications.map((note, index) => (
              <li  key={index}>{note}</li>
            ))}
          </ul>
      )} */}
      <ul>
       
        {notifications.map((note, index) => (
          <li  key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
