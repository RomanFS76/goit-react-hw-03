
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({showUser}) => {
  <ul className={css.contactList}>
    {showUser.map((el) => {
      return (
        <li key={el.id}>
          <Contact name={el.name} number={el.number}></Contact>
        </li>
      );
    })}
  </ul>
};

export default ContactList;


