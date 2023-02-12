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
        <input
          type="text"
          value={income}
          onChange={handleChange}
          onBlur={handleBlur}
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
        <input
          type="text"
          value={payment}
          onChange={handleChange}
          onBlur={handleBlur}
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
