import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

export default function FormItem({
  as = '',
  name,
  label,
  className,
  placeholder = '',
  tabIndex = '0',
}) {
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

FormItem.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
