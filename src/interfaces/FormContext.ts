/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface IFormContext {
  formState: object;
  setForm?: (form: object) => void;
  step: number;
  setStep?: React.Dispatch<number>;
  nextStep: () => any;
  prevStep: () => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (event: any) => void;
}

export const FormContextInitial = {
  formState: {},
  setForm: () => ({}),
  step: 0,
  setStep: () => 0,
  nextStep: () => 0,
  prevStep: () => 0,
  handleChange: () => ({}),
};
