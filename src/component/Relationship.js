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
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="married">Married</option>
        <option value="living_with_partner">Living with partner</option>
        <option value="single">Single</option>
        <option value="separated">Separated</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
        <option value="other">Other</option>
      </select>
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default RelationshipStatus;
