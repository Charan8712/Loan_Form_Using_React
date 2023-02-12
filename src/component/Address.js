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
        <input
          type="text"
          value={houseNumber}
          onChange={handleHouseNumberChange}
          onBlur={handleBlur}
        />
      </label>
      <br />
      <label>
        Flat Number:
        <input
          type="text"
          value={flatNumber}
          onChange={handleFlatNumberChange}
          onBlur={handleBlur}
        />
      </label>
      <br />
      <label>
        House Name:
        <input
          type="text"
          value={houseName}
          onChange={handleHouseNameChange}
          onBlur={handleBlur}
        />
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          value={street}
          onChange={handleStreetChange}
        />
      </label>
      <br />
      <label>
        Town/City:
        <input
          type="text"
          value={townCity}
          onChange={handleTownCityChange}
        />
      </label>
      <br />
      <label>
        County/District:
        <input
          type="text"
          value={countyDistrict}
          onChange={handleCountyDistrictChange}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Address;

    