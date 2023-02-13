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
      <input type="text" placeholder=" least 6 digits." id="sortCode" value={sortCode} onChange={handleChange} style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-70px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}/>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      
    </div>
  );
}

export default SortCode;
