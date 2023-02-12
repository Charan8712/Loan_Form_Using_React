import React, { useState } from 'react';

const LoanAmountForm = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loanAmount) {
      setErrorMessage('Loan amount is required');
      return;
    }

    if (loanAmount < 1000 || loanAmount > 250000) {
      setErrorMessage('Loan amount should be between £1000 and £250000');
      return;
    }

    // submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loanAmount">Loan Amount:</label>
      <input
        type="number"
        id="loanAmount"
        min="1000"
        max="250000"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanAmountForm;
