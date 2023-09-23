import { Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { Field, Fieldset, Input, Recaptcha } from '../Fields';
import { Translate } from 'echess/components';
import { Submit } from 'echess/components/Buttons';
import { forgot as forgotValues } from 'echess/models';
import { forgot } from 'echess/controllers/identity';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values, helpers) => {
    await forgot(ref, values, helpers);
  };

  return (
    <Formik {...forgotValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <Fieldset name="email" className="mb-4" label={<Translate>Email address</Translate>}>
          <Field name="email" type="email" as={Input} />
        </Fieldset>

        <Submit className="button full primary -mr-0.5">
          <Translate>Recover pasword</Translate>
        </Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
