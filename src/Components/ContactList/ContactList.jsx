import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ showUser,onDelete }) => {
  return (
    <ul className={css.contactList}>
      {showUser.map((el) => {
        return (
          <li key={el.id} className={css.contactItem}>
            <Contact id={el.id} name={el.name} number={el.number} onDelete={onDelete}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
