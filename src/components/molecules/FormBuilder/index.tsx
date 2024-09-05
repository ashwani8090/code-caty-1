/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";

import Field from "./Field";

/**
 * 
[
   {
      type: "text",
      name: "first_name",
      label: "First Name",
    },

    { type: "password",
      name: "password",
      label: "Password",
      required: true 
    },

  ];
 * 
 */

interface IField {
  name: string;
  label: string;
  type: "text" | "password";
  required: boolean;
  className?: string;
}

export interface IFormBuilder<T extends FieldValues> {
  fields: IField[];
  onSubmit: (data: T) => void;
  form: UseFormReturn<T>;
  children?: ReactNode;
}

const FormBuilder = <T extends FieldValues>(_props: IFormBuilder<T>) => {
  const { fields, form, onSubmit, children } = _props;
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields?.map((field, index) => (
          <Field key={`${field.name}-${index}`} {...field} />
        ))}
        {children}
      </form>
    </FormProvider>
  );
};

export default FormBuilder;
