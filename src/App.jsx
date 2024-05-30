import { useEffect, useState } from "react";
import "./App.css";
import css from "./components/SearchBox/SearchBox.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const usersData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [dataUser, setDataUser] = useState((dataUser = usersData) => {
    const localContact = localStorage.getItem("contact");
    if (localContact) {
      return JSON.parse(localContact);
    }
    return dataUser;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(dataUser));
  }, [dataUser]);

  const [filter, setFilter] = useState("");

  const visibleUser = dataUser.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setDataUser((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setDataUser((prevContact) => {
      return prevContact.filter((el) => el.id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBox
        className={css.searchBox}
        value={filter}
        onFilter={setFilter}
      ></SearchBox>
      <ContactList
        showUser={visibleUser}
        onDelete={deleteContact}
      ></ContactList>
    </>
  );
}

export default App;
