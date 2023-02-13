import React, { useState } from "react";

function PayFrequency() {
  const [payFrequency, setPayFrequency] = useState("Monthly");

  const handleChange = (event) => {
    setPayFrequency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="payFrequency">Pay Frequency:</label>
      <select style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-30px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
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
