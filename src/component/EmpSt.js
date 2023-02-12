import React, { useState } from "react";

function StatusStatus() {
  const [status, setStatus] = useState("Employed-Full-Time");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={handleChange}>
        <option value="Employed-Full-Time">Employed-Full-Time</option>
        <option value="Self-Employed">Self-Employed</option>
        <option value="On Benefits">On Benefits</option>
        <option value="Employed-Part-Time">Employed-Part-Time</option>
        <option value="Unemployed">Unemployed</option>
        <option value="Retired">Retired</option>
        <option value="Home-Maker">Home-Maker</option>
        <option value="Student">Student</option>
      </select>
    </div>
  );
}

export default StatusStatus;
