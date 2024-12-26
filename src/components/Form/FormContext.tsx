import React from 'react';

interface FormContextProps {
  values: Record<string, any>;
  errors: Record<string, string>;
  setFieldValue: (field: string, value: any) => void;
  setFieldError: (field: string, error: string) => void;
}

export const FormContext = React.createContext<FormContextProps | null>(null);

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
