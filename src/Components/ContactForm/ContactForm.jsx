import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
// import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = ({onAdd}) => {
  const nameFieldId = useId(); 
  const numberFieldId = useId();



  const handleSubmit = ({values, actions}) => {
    // onAdd({
    //   id:nanoid(),
    //   name:e.target.elements.username.value,
    //   number:e.target.elements.phone.value,
    // });
    console.log(values);
    console.log(actions);

  };



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>

        <label htmlFor={nameFieldId} className={css.labelForm}>Name</label>

        <Field type="text" name="username" id={nameFieldId} className={css.fieldForm}/>

        <label htmlFor={numberFieldId} className={css.labelForm}>Number</label>

        <Field type="number" name="phone" id={numberFieldId} className={css.fieldForm}/>

        <button type="submit">Submit</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;
