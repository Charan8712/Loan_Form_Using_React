import React from "react";

const NextButton = ({ handleNextStep }) => {
  return (
    <button  type="button" onClick={handleNextStep}  style={{fontSize: "15px", width: "70px",height:"35px",borderRadius: "50px" , marginLeft: "0px", marginRight: "-90px", marginTop:"20px", textAlign: "center" , borderBlockStyle: "solidblack",position: "relative"}}>
      Next
    </button>
  );
};

export default NextButton;
