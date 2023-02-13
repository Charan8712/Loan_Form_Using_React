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
      <label htmlFor="gender" style={{fontWeight:"bold", marginLeft: "-10px" ,textAlign:"center", marginLeft:"50px",padding:"0px" }} >
        Gender *
        <br />
        <input style={{textAlign:"center", marginLeft:"25px"}}
          type ="radio"
          id="male"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <br />
        <input   style={{textAlign:"center", marginLeft:"40px"}}
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />
        <input  style={{textAlign:"center", marginLeft:"30px"}}
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
      <button type="submit"style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , margin: "10px", marginLeft: "90px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}} style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , margin: "10px", marginLeft: "90px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}>Submit</button>
    </form>
  );
};

export default GenderForm;