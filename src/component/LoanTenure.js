import React, { useState } from 'react';

const LoanTenureForm = () => {
  const [loanTenure, setLoanTenure] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoanTenureChange = (event) => {
    setLoanTenure(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loanTenure) {
      setErrorMessage('Loan tenure is required');
      return;
    }

    // submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loanTenure">Loan Tenure:</label>
      <select id="loanTenure" value={loanTenure} onChange={handleLoanTenureChange}>
        <option value="">Select</option>
        <option value="12 months">12 months</option>
        <option value="18 months">18 months</option>
        <option value="2 years">2 years</option>
        <option value="3 years">3 years</option>
        <option value="4 years">4  years</option>
        <option value="5 years">5  years</option>
        <option value="6 years">6  years</option>
        <option value="7 years">7  years</option>
        <option value="8 years">8  years</option>
        <option value="10 years">10 years</option>
        <option value="12 years">12 years</option>
        <option value="15 years">15 years</option>
        {/* ... additional options for up to 20 years */}
        <option value="20 years">20 years</option>
      </select>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanTenureForm;
