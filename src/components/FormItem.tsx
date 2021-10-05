import React from 'react';
import { Field, ErrorMessage } from 'formik';

type Props = {
  as?: string;
  className?: string;
  placeholder?: string;
  tabIndex?: string;
  name: string;
  label: string;
};

export default function FormItem({
  as = '',
  name,
  label,
  className,
  placeholder = '',
  tabIndex = '0',
}: Props) {
  return (
    <div className={`form-item ${className ? className : ''}`}>
      <label htmlFor={name}>{label}</label>
      <Field
        as={as}
        name={name}
        id={name}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
      <ErrorMessage component="div" name={name} className="validation-error" />
    </div>
  );
}
