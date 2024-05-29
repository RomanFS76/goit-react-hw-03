import css from "../Contact/Contact.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ id, name, number,onDelete }) => {
  return (
    <>
      <div className={css.wrapperContact}>
        <p className={css.contactText}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <p className={css.contactText}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>

        <button type="button" className={css.btnDelete} onClick={()=>onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
