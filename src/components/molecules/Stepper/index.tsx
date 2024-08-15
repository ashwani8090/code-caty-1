import { useContext } from "react";

import { FormContext } from "@/contexts/FormProvider";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const { step } = useContext(FormContext);

  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return <Step1 />;
  }
};

export default MultiStepForm;
