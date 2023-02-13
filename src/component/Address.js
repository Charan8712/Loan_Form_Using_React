import React, { useState } from "react";

const Address = () => {
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [houseName, setHouseName] = useState("");
  const [street, setStreet] = useState("");
  const [townCity, setTownCity] = useState("");
  const [countyDistrict, setCountyDistrict] = useState("");
  const [error, setError] = useState("");

  const handleHouseNumberChange = (e) => {
    setHouseNumber(e.target.value);
  };

  const handleFlatNumberChange = (e) => {
    setFlatNumber(e.target.value);
  };

  const handleHouseNameChange = (e) => {
    setHouseName(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleTownCityChange = (e) => {
    setTownCity(e.target.value);
  };

  const handleCountyDistrictChange = (e) => {
    setCountyDistrict(e.target.value);
  };

  const handleBlur = () => {
    if (!houseNumber && !flatNumber && !houseName) {
      setError("Please fill one of the fields from House Number, Flat Number, or House Name.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>
        House Number:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-30px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={houseNumber}
          onChange={handleHouseNumberChange}
          onBlur={handleBlur}
          placeholder="Enter House Number"
        />
      </label>
      <br />
      <label>
        Flat Number:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={flatNumber}
          onChange={handleFlatNumberChange}
          onBlur={handleBlur}
          placeholder="Enter Flat Number"
        />
      </label>
      <br />
      <label>
        House Name:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-40px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={houseName}
          onChange={handleHouseNameChange}
          onBlur={handleBlur}
          placeholder="Enter House Name"
        />
      </label>
      <br />
      <label>
        Street:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-80px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={street}
          placeholder="Enter Street Address"
          onChange={handleStreetChange}
       
        />
      </label>
      <br />
      <label>
        Town/City:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={townCity}
          onChange={handleTownCityChange}
          placeholder="Enter Your City"
        />
      </label>
      <br />
      <label>
        County/District:
        <input  style={{fontSize: "15px", width: "220px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-30px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={countyDistrict}
          onChange={handleCountyDistrictChange}
          placeholder="Enter Country"
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Address;

    