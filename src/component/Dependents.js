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
      <input
        type="text"
        value={dependents}
        onChange={(e) => setDependents(e.target.value)}
      />
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default NumberOfDependents;
