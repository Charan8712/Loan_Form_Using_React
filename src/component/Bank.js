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
      <input
        type="text"
        id="bankAccountNumber"
        value={bankAccountNumber}
        onChange={handleChange}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default BankAccountNumber;
