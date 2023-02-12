import React, { useState } from "react";

function Occupation() {
  const [occupation, setOccupation] = useState("Managerial");

  const handleChange = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <div>
      <label htmlFor="occupation">Occupation:</label>
      <select id="occupation" value={occupation} onChange={handleChange}>
        <option value="Managerial">Managerial</option>
        <option value="Professional">Professional</option>
        <option value="Semi-Professional">Semi-Professional</option>
        <option value="Clerical/Administration">Clerical/Administration</option>
        <option value="Skilled Trade">Skilled Trade</option>
        <option value="Care/Leisure/Service">Care/Leisure/Service</option>
        <option value="Sales customer service">Sales customer service</option>
        <option value="Process/Machine Operative">Process/Machine Operative</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default Occupation;
