import React, { ReactNode } from 'react';
import { useFormContext } from './FormContext';

interface FormProps {
  onSubmit: (values: Record<string, any>) => void;
  children: ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const { values, errors } = useFormContext();

  const isNoError = (errors: Record<string, string>) => {
    if (Object.keys(errors).length === 0) return false;

    return Object.keys(errors).find((key) => errors[key] !== '') === undefined;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNoError(errors)) {
      onSubmit(values);
    } else {
      console.error('Validation errors:', errors);
    }
  };

  return (
    <form className="justify-start text-left" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
