import React, { useState } from "react";
import NameForm from "./NameForm";
import Gender from "./Gender";
import Dob from "./Dob";
import Email from "./Email";
import Mobile from "./Mobile";
import Relationship from "./Relationship";
import Dependents from "./Dependents";
import NextButton from "./NextButton";

const MainComponent = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return (
        <>
        
          <NameForm />
          <NextButton handleNextStep ={handleNextStep} />
          
        </>
      );
    case 2:
      return (
        <>
          <Gender />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    case 3:
      return (
        <>
          <Dob />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    case 4:
      return (
        <>
          <Email />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    case 5:
      return (
        <>
          <Mobile />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    case 6:
      return (
        <>
          <Relationship />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    case 7:
      return (
        <>
          <Dependents />
          <NextButton handleNextStep={handleNextStep} />
        </>
      );
    default:
      return <div style={{color:"green"}}>Form has been successfully submitted!</div>;
  }
};

export default MainComponent;
