"use client";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState([]);

  const steps = [
    <StepOne setStep={setStep} choices={choices} />,
    <StepOne setStep={setStep} choices={choices} />,
  ];

  return <main>{steps[step]}</main>;
};

export default Page;

const StepOne = ({
  setStep,
  choices,
}: {
  setStep: (pre: number) => void;
  choices: string[];
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="selection-card"
        onClick={() => () => {
          setStep(1);
        }}
      >
        <h1>Bruks bil</h1>
      </div>
      <div className="spacer"></div>
      <div className="selection-card">
        <h1>Helge bil</h1>
      </div>
    </div>
  );
};
