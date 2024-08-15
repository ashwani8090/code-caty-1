import { useContext } from "react";

import { FormContext } from "@/contexts/FormProvider";

const Step1 = () => {
  const { nextStep, handleChange } = useContext(FormContext);

  return (
    <div>
      <h1>Personal Information</h1>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <button onClick={() => nextStep()}>Next</button>
    </div>
  );
};

export default Step1;
