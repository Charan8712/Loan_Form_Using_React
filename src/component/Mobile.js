import React, { useState } from "react";

const MobileNumber = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobile) {
      setError("Mobile number is required");
      return;
    }

    if (!/^07\d{8}$/.test(mobile)) {
      setError("Please provide a valid mobile number starting with 07");
      return;
    }

    setError(null);
  };

  return (
    <>Mobile Number *
    <form onSubmit={handleSubmit}>
      <input style={{fontSize: "15px", width: "210px",height:"25px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
        value={mobile}
        placeholder="Enter Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      {error && <div style={{color:"red"}}>{error}</div>}
      <button type="submit"style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , margin: "10px", marginLeft: "50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Submit</button>
    </form>
    </>
  );
};

export default MobileNumber;
