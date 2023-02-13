import React, { useState } from "react";

const EmailAddress = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please provide a valid email address Please provide a valid email address");
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Invalid email address");
      return;
    }

    setError(null);
  };

  return (
    <> <div style={{fontWeight:"bold", marginLeft: "-10px" ,textAlign:"center", marginLeft:"50px",padding:"0px", marginTop:"30px", marginBottom:"30px" }}>Email Address *</div>
    <form onSubmit={handleSubmit}>
      <input  style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px"}}
        type="email"
        value={email}
        placeholder= "Enter Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <div style={{color:"red"}}>{error}</div>}
      <button type="submit" style={{borderRadius:"50px",width: "90px",fontWeight:"bold", height:"20px", marginLeft:"00px", textAlign:"center",marginBottom: "10px"}}>Submit</button>
    </form>
    </>
  );
};

export default EmailAddress;
