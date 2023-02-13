import React, { useState } from "react";

const RelationshipStatus = () => {
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!status) {
      setError("Please choose your relationship status");
      return;
    }

    setError(null);
  };

  return (
    <>Relationship Status *
    <form onSubmit={handleSubmit}>
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={{fontSize: "15px", width: "210px",height:"25px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>
        <option value="">-- Select --</option>
        <option value="married">Married</option>
        <option value="living_with_partner">Living with partner</option>
        <option value="single">Single</option>
        <option value="separated">Separated</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
        <option value="other">Other</option>
      </select>
      {error && <div style={{color:"red"}}>{error}</div>}
      <button type="submit" style={{fontSize: "15px", width: "80px",height:"25px",borderRadius: "50px" , marginLeft: "50px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Submit</button>
    </form>
    </>
  );
};

export default RelationshipStatus;
