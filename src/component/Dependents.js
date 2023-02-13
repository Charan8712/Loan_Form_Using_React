import React, { useState } from "react";

const NumberOfDependents = () => {
  const [dependents, setDependents] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dependents) {
      setError("Number of dependents is required");
      return;
    }

    if (!/^\d+$/.test(dependents)) {
      setError("Number of dependents must be a whole number");
      return;
    }

    setError(null);
  };

  return (
    <>Number of Dependents *
    <form onSubmit={handleSubmit}>
      <input style={{fontSize: "15px", width: "210px",height:"25px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
        type="text"
        value={dependents}
        placeholder="Enter Dependents"
        onChange={(e) => setDependents(e.target.value)}
      />
      {error && <div style={{color:"red"}}>{error}</div>}
      <button type="submit" style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , margin: "10px", marginLeft: "50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Submit</button>
    </form>
    </>
  );
};

export default NumberOfDependents;
