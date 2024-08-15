/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

import { FormContextInitial, IFormContext } from "@/interfaces/FormContext";

export const FormContext = createContext<IFormContext>(FormContextInitial);

const FormProvider = ({ children }: any) => {
  const [formState, setForm] = useState<any>({});
  const [step, setStep] = useState<number>(1);

  const nextStep: any = () => setStep((s) => s + 1);
  const prevStep: any = () => setStep((s) => s - 1);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setForm((form: any) => ({ ...form, [name]: value }));
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        setForm,
        step,
        nextStep,
        prevStep,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
