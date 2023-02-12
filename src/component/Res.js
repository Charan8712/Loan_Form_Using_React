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
      <label>
        Residential Status:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Select an option</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResidentialStatus;
