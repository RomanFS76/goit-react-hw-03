import css from "../Contact/Contact.module.css";
import clsx from "clsx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ dataUser }) => {
  return (
    <ul className={clsx(css.contactList, css.flex)}>
      {dataUser.map((el) => {
        return (
          <li id={el.id} className={clsx(css.flex,css.contactItem)}>
            <div className="wrapper">
              <p>
                <FaUser className={css.icon}/>
                {el.name}
              </p>
              <p>
                <FaPhoneAlt className={css.icon}/>
                {el.number}
              </p>
            </div>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
