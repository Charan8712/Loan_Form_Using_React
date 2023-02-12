import React, { useState } from "react";

function SortCode() {
  const [sortCode, setSortCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setSortCode(event.target.value);

    if (event.target.value.length >= 6) {
      setErrorMessage("");
    } else {
      setErrorMessage("Sort code must contain at least 6 digits");
    }
  };

  return (
    <div>
      <label htmlFor="sortCode">Sort Code:</label>
      <input type="text" id="sortCode" value={sortCode} onChange={handleChange} />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default SortCode;
