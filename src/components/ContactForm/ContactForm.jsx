import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});


const ContactForm = ({onAdd}) => {
  const nameFieldId = useId(); 
  const numberFieldId = useId();



  const handleSubmit = (values,action) => {    
    onAdd({
      id: nanoid(), ...values      
    });
    action.resetForm();
  };



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>

        <label htmlFor={nameFieldId} className={css.labelForm}>Name</label>

        <Field type="text" name="name" id={nameFieldId} className={css.fieldForm}/>
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId} className={css.labelForm}>Number</label>

        <Field type="text" name="number" id={numberFieldId} className={css.fieldForm}/>
        <ErrorMessage name="number" component="span" />

        <button type="submit" className={css.btnSubmit}>Add Contact</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;
