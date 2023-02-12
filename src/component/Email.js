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
    <> Email Address*
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EmailAddress;
