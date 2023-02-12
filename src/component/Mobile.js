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
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default MobileNumber;
