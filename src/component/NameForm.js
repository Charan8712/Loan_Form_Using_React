import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]+$/;

    if (regex.test(value)) {
      setFirstName(value);
      setErrorMessage('');
    } else {
      setErrorMessage('First name can only contain alphabets');
    }
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]+$/;

    if (regex.test(value)) {
      setLastName(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Last name can only contain alphabets');
    }
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName) {
      setErrorMessage('First name is required');
      return;
    }

    if (!lastName) {
      setErrorMessage('Last name is required');
      return;
    }

    // Add submit logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName"  style={{fontWeight:"bold", marginLeft: "-10px"}}>First Name:</label>
      <input type="text" id="firstName" placeholder="Enter First Name" value={firstName} onChange={handleFirstNameChange} style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px"}}/>
      <br />
      <label htmlFor="middleName" style={{fontWeight:"bold", marginLeft: "-10px"}}>Middle Name:</label>
      <input type="text" id="middleName" value={middleName} onChange={handleMiddleNameChange}placeholder="Enter Middle Name" style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"8px", textAlign:"center",marginBottom: "10px"}}/>
     
      <br />
      <label htmlFor="lastName" style={{fontWeight:"bold", marginLeft: "-10px"}}>Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} placeholder= "Enter Last Name" style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px" }} />
      <br />
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <br />
      <button type="submit"  style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , marginTop: "-10px", marginLeft: "90px", textAlign: "center" , borderBlockStyle: "solidblack"}}>Submit</button>
    </form>
  );
};

export default NameForm;

// import React, { useState } from 'react';

// function NameForm() {
//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFirstNameChange = (event) => {
//     const value = event.target.value;
//     const regex = /^[a-zA-Z]+$/;

//     if (regex.test(value)) {
//       setFirstName(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('First name can only contain alphabets');
//     }
//   };

//   const handleLastNameChange = (event) => {
//     const value = event.target.value;
//     const regex = /^[a-zA-Z]+$/;

//     if (regex.test(value)) {
//       setLastName(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Last name can only contain alphabets');
//     }
//   };
//   const handleMiddleNameChange = (event) => {
//     setMiddleName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!firstName) {
//       setErrorMessage('First name is required');
//       return;
//     }

//     if (!lastName) {
//       setErrorMessage('Last name is required');
//       return;
//     }

//     // Add submit logic here
//   };

 

//   return (
//     <form onSubmit={handleSubmit}>
//       <label style={{fontWeight:"bold", margin: "20px",width:"200px",height:"25px", margin: "10px", borderBlockStyle: "solidblack"}}>
//         First Name*:
//         <input style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px"}}
//           type="text"
//           placeholder="Enter First Name"
//           value={firstName}
//           onChange={(event) => setFirstName(event.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label style={{fontWeight:"bold", marginLeft: "-10px"}}>
//         Middle Name:
//         <input style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px"}}
//           placeholder= "Enter Middle Name"
//           type="text"
//           value={middleName}
//           onChange={(event) => setMiddleName(event.target.value)}
//         />
//       </label>
//       <br />
//       <label  style={{fontWeight:"bold", marginLeft: "2px"}}>
//         Last Name *:
//         <input style={{borderRadius:"50px",width: "200px", height:"20px", marginLeft:"20px", textAlign:"center",marginBottom: "10px"}}
//           type="text"
//           placeholder='Enter Last Name'
//           value={lastName}
//           onChange={(event) => setLastName(event.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default NameForm;