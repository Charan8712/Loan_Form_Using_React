import React, { useState } from 'react';

const LoanPurposeForm = () => {
  const [loanPurpose, setLoanPurpose] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoanPurposeChange = (event) => {
    setLoanPurpose(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loanPurpose) {
      setErrorMessage('Loan purpose is required');
      return;
    }

    // submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loanPurpose">Loan Purpose:</label>
      <select id="loanPurpose" value={loanPurpose} onChange={handleLoanPurposeChange}>
        <option value="">Please select a loan purpose</option>
        <option value="Holiday">Holiday</option>
        <option value="Car">Car</option>
        <option value="Debt Consolidation">Debt Consolidation</option>
        <option value="Home Improvement">Home Improvement</option>
        <option value="Wedding">Wedding</option>
        <option value="Other">Other</option>
      </select>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanPurposeForm;
