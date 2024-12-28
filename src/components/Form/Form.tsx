import React, { ReactNode } from 'react';
import { useFormContext } from './FormContext';
import { FormProvider } from './FormProvider';

interface FormProps {
  onSubmit: (values: Record<string, any>) => void;
  children: ReactNode;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit, children }) => {
  const { values, errors, validateAll } = useFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      onSubmit(values);
    } else {
      console.error('Validation errors:', errors);
    }
  };

  return (
    <form className="text-left" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <FormProvider>
      <FormComponent onSubmit={onSubmit}>{children}</FormComponent>
    </FormProvider>
  );
};

export default Form;
