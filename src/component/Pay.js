import React, { useState } from "react";

function PayFrequency() {
  const [payFrequency, setPayFrequency] = useState("Monthly");

  const handleChange = (event) => {
    setPayFrequency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="payFrequency">Pay Frequency:</label>
      <select
        id="payFrequency"
        value={payFrequency}
        onChange={handleChange}
      >
        <option value="Weekly">Weekly</option>
        <option value="Fortnightly">Fortnightly</option>
        <option value="Four Weekly">Four Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
    </div>
  );
}

export default PayFrequency;
