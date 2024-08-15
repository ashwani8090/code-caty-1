import { useContext } from "react";

import { FormContext } from "@/contexts/FormProvider";

const Step2 = () => {
  const { nextStep, prevStep, handleChange } = useContext(FormContext);

  return (
    <div>
      <h1>Contact Information</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <button className="mx-2" onClick={() => prevStep()}>
        Back
      </button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  );
};

export default Step2;
