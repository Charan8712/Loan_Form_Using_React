import React, { useState } from "react";

function BankAccountNumber() {
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setBankAccountNumber(event.target.value);

    if (event.target.value.length >= 8) {
      setErrorMessage("");
    } else {
      setErrorMessage("Bank account number must contain at least 8 digits");
    }
  };

  return (
    <div>
      <label htmlFor="bankAccountNumber">Bank Account Number:</label>
      <input style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "20px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
        type="text"
        id="bankAccountNumber"
        value={bankAccountNumber}
        onChange={handleChange}
        placeholder="Enter Bank Account Num"
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default BankAccountNumber;
