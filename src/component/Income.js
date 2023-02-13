import React, { useState } from "react";

const NetMonthlyIncome = () => {
  const [income, setIncome] = useState("");
  const [error, setError] = useState("");

  const handleChange = event => {
    setIncome(event.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (!income) {
      setError("Net monthly income is required");
    }
  };

  return (
    <div>
      <label>
        Net Monthly Income:
        <input style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-30px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={income}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Your Income"
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const MonthlyRentMortgage = () => {
  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");

  const handleChange = event => {
    setPayment(event.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (!payment) {
      setError("Monthly rent/mortgage payment is required");
    } else if (payment <= 0) {
      setError("Monthly rent/mortgage payment should be greater than 0");
    }
  };

  return (
    <div>
      <label>
        Monthly Rent / Mortgage Payment:
        <input style={{fontSize: "15px", width: "240px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "60px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={payment}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Monthly Pay"
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const IncomeExpenseForm = () => (
  <form>
    <NetMonthlyIncome />
    <MonthlyRentMortgage />
  </form>
);

export default IncomeExpenseForm;
