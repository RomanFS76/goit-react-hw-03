import { useState } from "react";
import "./App.css";
import css from "./Components/SearchBox/SearchBox.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  const [dataUser, setDataUser] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

  const [filter, setFilter] = useState('');


  const visibleUser = dataUser.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  
  const addContact = (newContact) => {
    setDataUser((prevContact)=>{
      return [...prevContact,newContact]
    })
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBox className={css.searchBox} value={filter} onFilter={setFilter}></SearchBox>
      <ContactList showUser={visibleUser} ></ContactList>
    </>
  );
}



export default App;
