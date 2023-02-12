import React from "react";

const NextButton = ({ handleNextStep }) => {
  return (
    <button type="button" onClick={handleNextStep}>
      Next
    </button>
  );
};

export default NextButton;
