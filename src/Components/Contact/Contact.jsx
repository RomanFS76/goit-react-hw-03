import css from "../Contact/Contact.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ( name,number) => {
  return (
    <>
      <p>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>

      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
