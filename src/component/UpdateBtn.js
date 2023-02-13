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
    <div >
      <button onClick={handleUpdate} style={{fontSize: "15px", width: "100px",height:"30px",borderRadius: "50px" , margin: "10px", marginRight: "20px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Update</button>
      <button onClick={handleCancel} style={{fontSize: "15px", width: "100px",height:"30px",borderRadius: "50px" , margin: "10px", marginRight: "-120px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Cancel</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
