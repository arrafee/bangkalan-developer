import { Button, Card, Datepicker, Label, Textarea } from 'flowbite-react';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import CommonForm from '../common-form/common-form.component';
import style from './intern-form.module.scss';

const InternForm: React.FC = () => {
  const initialValues = {
    name: '',
    birthPlace: '',
    birthDate: '',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    birthPlace: Yup.string().required(),
    birtDate: Yup.string().required(),
    address: Yup.string().required('*Alamat tidak boleh kosong!'),
  });

  return (
    <div className={style.container}>
      <Card className="w-[70%]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // TODO: do hit api
            // TODO: forbiden console log in production
            // eslint-disable-next-line no-console
            console.log(values);
          }}
        >
          {/* // TODO: SHOULD FINISH ALL FORM */}
          {({ handleSubmit, errors, touched }) => (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <CommonForm
                formName="name"
                label="Nama Lengkap"
                isRequired
                className={errors.name && touched.name ? 'border-red-500' : ''}
              />
              <CommonForm
                formName="birthPlace"
                label="Tempat Lahir"
                isRequired
                className={errors.birthPlace && touched.birthPlace ? 'border-red-500' : ''}
              />
              <Field className="flex w-full flex-col" id="birthDate" name="birthDate" autoFocus type="text">
                {({ field }: any) => (
                  <div className="flex flex-col gap-2">
                    <Label>Tanggal Lahir</Label>
                    <Datepicker
                      id="birthDate"
                      name="birthDate"
                      {...field}
                      className={errors.address && touched.address ? 'border-red-500' : null}
                    />
                    <ErrorMessage component="a" name="birthDate" />
                  </div>
                )}
              </Field>
              <Field className="flex w-full flex-col" id="address" name="address" autoFocus type="text">
                {({ field }: any) => (
                  <div className="flex flex-col gap-2">
                    <Label>Alamat</Label>
                    <Textarea
                      id="address"
                      name="address"
                      {...field}
                      className={errors.address && touched.address ? 'border-red-500' : null}
                    />
                    {/* {errors.address ? ( */}
                    <ErrorMessage component="a" name="address" className="mt-0 text-xs text-red-400" />
                    {/* ) : null} */}
                  </div>
                )}
              </Field>
              <Button disabled={!!errors.name}>Simpan</Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default InternForm;
