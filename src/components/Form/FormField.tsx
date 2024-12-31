import {
  Input,
  type InputProps as InputComponentProps,
} from '@components/Input';
import React, { useEffect } from 'react';
import { useFormContext } from './FormContext';
import { composeRules, RuleType } from './validators';

interface InputProps extends InputComponentProps {
  name: string;
  wrapperClassName?: string;
  rules?: { type: RuleType; message?: string }[];
}

export const FormField: React.FC<InputProps> = ({
  name,
  rules = [],
  variant,
  wrapperClassName,
  ...props
}) => {
  const composedRules = composeRules(rules);
  const { values, errors, setFieldValue, setFieldError, registerValidation } =
    useFormContext();

  const handleValidationError = (value: any) => {
    // Validate all rules
    const errors = composedRules.map((rule) => ({
      type: rule.type,
      message: rule.validateFn && rule.validateFn(value),
    }));

    let fieldError = '';

    errors.forEach((error) => {
      if (error.message) {
        // Prioritize required error over other errors
        if (error.type === 'required') {
          fieldError = error.message;
          return;
        }

        if (!fieldError) {
          fieldError = error.message;
        }
      }
    });

    setFieldError(name, fieldError);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFieldValue(name, value);
    handleValidationError(value);
  };

  useEffect(() => {
    if (rules.length) {
      registerValidation(name, rules);
    }

    return () => {
      registerValidation(name, []);
    };
  }, []);

  return (
    <div className={wrapperClassName}>
      <Input
        variant={errors[name] ? 'error' : variant}
        {...(errors[name] && { message: errors[name] })}
        value={values[name] || ''}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default FormField;
