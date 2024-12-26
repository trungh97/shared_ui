import {
  Input,
  type InputProps as InputComponentProps,
} from '@components/Input';
import React from 'react';
import { useFormContext } from './FormContext';

interface InputProps extends InputComponentProps {
  name: string;
  validate?: (value: any) => string | undefined;
}

const FormField: React.FC<InputProps> = ({
  name,
  validate,
  variant,
  ...props
}) => {
  const { values, errors, setFieldValue, setFieldError } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setFieldValue(name, value);
    if (validate) {
      const error = validate(value);
      setFieldError(name, error || '');
    }
  };

  return (
    <div>
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
