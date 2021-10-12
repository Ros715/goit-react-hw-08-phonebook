import React, { /*useState,*/ useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.js";
import Filter from "../Filter/Filter.js";
import ContactList from "../ContactList/ContactList.js";
//import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { /*useSelector,*/ useDispatch, connect } from "react-redux";
import * as contactsActions from "../../redux/actions";
import * as contactsOperations from "../../redux/operations";
import {
  getContacts,
  getFilteredContacts,
} from "../../redux/contacts-selectors";

function Contacts({ contacts, filteredContacts }) {
  //const contacts = useSelector(getContacts);
  //const filter = useSelector((state) => state.filter);
  //const [filter, setFilter] = useState(() => { return ""; });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onAddContact = (name, number) => {
    const selectedContact = contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      dispatch(contactsOperations.addContact({ id: uuidv4(), name, number }));
    }
  };

  const onDeleteContact = (contactId) => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  const onChangeFilter = (filter) => {
    dispatch(contactsActions.changeFilter(filter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filteredContacts: getFilteredContacts(state),
});

export default connect(mapStateToProps, null)(Contacts);
