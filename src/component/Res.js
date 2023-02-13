import React, { useState } from "react";

const ResidentialStatus = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const options = [
    "Home owner (Mortgaged)",
    "Home Owner (Mortgage Free)",
    "Furnished Tenant",
    "Living with Parent(s)",
    "Council Tenant",
    "Others"
  ];

  const handleChange = event => {
    setSelectedOption(event.target.value);
    setError("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!selectedOption) {
      setError("Please select a residential status");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Residential Status:
        <select value={selectedOption} onChange={handleChange} style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-10px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>
          <option value="">Select an option</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{fontSize: "15px", width: "70px",height:"30px",borderRadius: "50px" , margin: "10px", marginRight: "-80px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Submit</button>
    </form>
  );
};

export default ResidentialStatus;
