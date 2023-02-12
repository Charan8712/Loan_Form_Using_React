import React, { useState } from 'react';

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name *:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(event) => setMiddleName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name *:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;