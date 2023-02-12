import React, { useState } from 'react';

const GenderForm = () => {
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!gender) {
      setErrorMessage('Gender is required');
      return;
    }
    // Do something with the form data, such as send it to an API
    setErrorMessage('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="gender">
        Gender *
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />
        <input
          type="radio"
          id="other"
          name="gender"
          value="Other"
          checked={gender === 'Other'}
          onChange={(event) => setGender(event.target.value)}
        />
        Other
      </label>
      <br />
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GenderForm;