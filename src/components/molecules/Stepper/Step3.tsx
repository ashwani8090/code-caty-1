import { useContext } from "react";

import { FormContext } from "@/contexts/FormProvider";

const Step3 = () => {
  const { prevStep, formState } = useContext(FormContext);

  const handleSubmit = () => {};

  return (
    <div>
      <h1>Review Your Information</h1>
      <pre className="t-white">{JSON.stringify(formState, null, 2)}</pre>
      <button onClick={() => prevStep()}>Back</button>
      <button className="mx-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Step3;
