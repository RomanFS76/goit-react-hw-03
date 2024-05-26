import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from "./ContactForm.module.css"

const initialValues = {
  username: "",
  email: "",
};

const ContactForm = () => {
  const nameFieldId = useId(); 
  const numberFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>

        <label htmlFor={nameFieldId} className={css.labelForm}>Name</label>

        <Field type="text" name="username" id={nameFieldId} className={css.fieldForm}/>

        <label htmlFor={numberFieldId} className={css.labelForm}>Number</label>

        <Field type="email" name="email" id={numberFieldId} className={css.fieldForm}/>

        <button type="submit">Submit</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;
