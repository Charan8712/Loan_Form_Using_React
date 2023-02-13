import React, { useState } from "react";

const DateOfBirth = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!day || !month || !year) {
      setError("All fields are required") ;
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
    <> <div style={{fontWeight:"bold", marginLeft: "-10px" ,textAlign:"center", marginLeft:"50px",padding:"0px", marginTop:"30px", marginBottom:"30px" }}>Date Of Birth *</div>
    <form onSubmit={handleSubmit}>
        
      <select value={day} onChange={e => setDay(e.target.value)} style={{borderRadius:"50px",width: "90px", height:"20px", marginLeft:"50px", textAlign:"center",marginBottom: "10px"}}>
        <option value="" disabled>
          Day
        </option>
        {days}
      </select>
      <select value={month} onChange={e => setMonth(e.target.value)} style={{borderRadius:"50px",width: "90px", height:"20px", marginLeft:"0px", textAlign:"center",marginBottom: "10px"}}>
        <option value="" disabled>
          Month
        </option>
        {monthOptions}
      </select>
      <select value={year} onChange={e => setYear(e.target.value)} style={{borderRadius:"50px",width: "90px", height:"20px", marginLeft:"0px", textAlign:"center",marginBottom: "10px"}}>
        <option value="" disabled>
          Year
        </option>
        {years}
      </select>
      {error && <div  style={{ color: 'red' }}>{error}</div>}
      
      <button type="submit"style={{borderRadius:"50px",width: "90px",fontWeight:"bold", height:"20px", marginLeft:"00px", textAlign:"center",marginBottom: "10px"}}>Submit</button>
    </form>
    </>
  );
};

export default DateOfBirth;
