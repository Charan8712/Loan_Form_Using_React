import React, { useState } from 'react';


const LoanForm = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
    setErrorMessage('');
  };

  const handleLoanTenureChange = (event) => {
    setLoanTenure(event.target.value);
    setErrorMessage('');
  };

  const handleLoanPurposeChange = (event) => {
    setLoanPurpose(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loanAmount) {
      setErrorMessage('Loan amount is required');
      return;
    }

    if (!loanTenure) {
      setErrorMessage('Loan tenure is required');
      return;
    }

    if (!loanPurpose) {
      setErrorMessage('Loan purpose is required');
      return;
    }

    if (loanAmount < 1000 || loanAmount > 250000) {
      setErrorMessage('Loan amount must be between £1000 and £250000');
      return;
    }

    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <>
        
          <label htmlFor="loanAmount" style={{marginRight:"10px", fontWeight:"Bold"}}>Loan Amount:</label>
          <input type="number"  style={{width: "200px",height: "25px", borderRadius: "50px" , margin: "10px", textAlign: "center"}} id="loanAmount" value={loanAmount} onChange={handleLoanAmountChange}placeholder="£1000 to £250000"  />
          <br />
          <label htmlFor="loanTenure" style={{marginRight:"20px", fontWeight:"Bold"}}>Loan Tenure:</label>
          <select id="loanTenure"  style={{width: "200px",height:"25px",borderRadius: "50px" , margin: "10px", textAlign: "center" , borderBlockStyle: "solidblack"}}  value={loanTenure} onChange={handleLoanTenureChange}>
            <option value=""> select a loan tenure</option>
            <option value="12 months">12 months</option>
            <option value="18 months">18 months</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
            <option value="4 years">4 years</option>
            {/* Add options for the rest of the loan tenures */}
          </select>
          <br />
          <label htmlFor="loanPurpose" style={{marginRight:"20px", fontWeight:"Bold"}}>Loan Purpose:</label>
          <select id="loanPurpose" value={loanPurpose} onChange={handleLoanPurposeChange} style={{width: "200px",height:"25px",borderRadius: "50px" , margin: "10px", textAlign: "center" , borderBlockStyle: "solidblack"}}>
            <option value="">select a loan purpose</option>
            <option value="Holiday">Holiday</option>
            <option value="Car">Car</option>
            <option value="Debt Consolidation">Debt Consolidation</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Wedding">Wedding</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <div style={{ color: 'red' }}>{errorMessage}</div>
          <br />
          <button type="submit" style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , margin: "10px", marginLeft: "90px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          {/* Render the next step of the form */}
        </>
      )}
    </form>
  );
};

export default LoanForm;

