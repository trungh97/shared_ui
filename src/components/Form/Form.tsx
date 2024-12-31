import { cva } from 'class-variance-authority';
import React, { ReactNode } from 'react';
import { useFormContext } from './FormContext';
import { FormProvider } from './FormProvider';
import { twMerge } from 'tailwind-merge';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (values: Record<string, any>) => void;
  children: ReactNode;
}

const styles = cva('text-left flex flex-col gap-y-5');

const FormComponent: React.FC<FormProps> = ({
  onSubmit,
  children,
  className,
}) => {
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
    <form className={twMerge(styles(), className)} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export const Form: React.FC<FormProps> = ({ onSubmit, children, ...props }) => {
  return (
    <FormProvider>
      <FormComponent onSubmit={onSubmit} {...props}>
        {children}
      </FormComponent>
    </FormProvider>
  );
};

export default Form;
