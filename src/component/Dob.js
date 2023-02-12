import React, { useState } from "react";

const DateOfBirth = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      setError("All fields are required");
      return;
    }

    setError(null);
  };

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i} value={i}>{i}</option>);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthOptions = months.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const years = [];
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <>Date Of Birth *
    <form onSubmit={handleSubmit}>
        
      <select value={day} onChange={e => setDay(e.target.value)}>
        <option value="" disabled>
          Day
        </option>
        {days}
      </select>
      <select value={month} onChange={e => setMonth(e.target.value)}>
        <option value="" disabled>
          Month
        </option>
        {monthOptions}
      </select>
      <select value={year} onChange={e => setYear(e.target.value)}>
        <option value="" disabled>
          Year
        </option>
        {years}
      </select>
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default DateOfBirth;
