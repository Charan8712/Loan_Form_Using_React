import React, { useState } from "react";

const PostCode = () => {
  const [postCode, setPostCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPostCode(e.target.value);
  };

  const handleBlur = () => {
    if (!/^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}$/i.test(postCode)) {
      setError("Please provide a valid post code Please provide a valid post code");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>
        Post Code:
        <input style={{fontSize: "15px", width: "210px",height:"20px",borderRadius: "50px" , margin: "10px", marginRight: "-50px", textAlign: "center" , borderBlockStyle: "solidblack", position:"relative"}}
          type="text"
          value={postCode}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder= "Enter Postal Code"
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PostCode;
