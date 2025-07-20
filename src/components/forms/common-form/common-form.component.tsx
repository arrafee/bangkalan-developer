import { Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface ICommonFormProps {
  formName: string;
  label: string;
  placeholder?: string;
  isRequired: boolean;
  type?: string;
  className: string;
}

const CommonForm: React.FC<ICommonFormProps> = ({ formName, label, placeholder, isRequired, type, className }) => {
  return (
    <Field className="flex w-full flex-col" id={formName} name={formName} autoFocus type={type}>
      {({ field }: any) => (
        <div className="flex flex-col gap-2">
          <Label>{label}</Label>
          <TextInput
            id={formName}
            name={formName}
            placeholder={placeholder}
            required={isRequired}
            {...field}
            className={className}
          />
          <ErrorMessage component="a" name={formName} className="mt-0 text-xs text-red-400" />
        </div>
      )}
    </Field>
  );
};

export default CommonForm;

CommonForm.defaultProps = {
  placeholder: '',
  type: 'text',
};
