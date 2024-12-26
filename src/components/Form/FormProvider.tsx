import React, { useState, ReactNode } from 'react';
import { FormContext } from './FormContext';

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setFieldValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <FormContext.Provider
      value={{ values, errors, setFieldValue, setFieldError }}
    >
      {children}
    </FormContext.Provider>
  );
};
