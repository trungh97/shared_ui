import React, { useState, ReactNode, useEffect } from 'react';
import { FormContext } from './FormContext';
import { composeRules, Rules, RuleType } from './validators';

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validations, setValidations] = useState<
    Record<
      string,
      { type: RuleType; validateFn: (value: any) => string | undefined }[]
    >
  >({});

  const registerValidation = (name: string, rules: Rules) => {
    const composedRules = composeRules(rules);
    setValidations((prev) => {
      const updated = { ...prev };
      if (!updated[name]) {
        updated[name] = [];
      }
      for (const { type, validateFn } of composedRules) {
        updated[name].push({ type, validateFn });
      }
      return updated;
    });
  };

  const validateAll = (): boolean => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    Object.entries(validations).forEach(([name, validationFns]) => {
      for (const { type, validateFn } of validationFns) {
        const error = validateFn(values[name]);
        if (error) {
          if (type === 'required') {
            newErrors[name] = error;
            isValid = false;
            break; // Prioritize 'required' error and stop further validation for this field
          } else if (!newErrors[name]) {
            newErrors[name] = error;
            isValid = false;
          }
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const setFieldValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        setFieldValue,
        setFieldError,
        validateAll,
        registerValidation,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
