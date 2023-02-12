import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    setMessage('Updated Successfully');
  };

  const handleCancel = () => {
    setMessage('Canceled Operation');
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleCancel}>Cancel</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
