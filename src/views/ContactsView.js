import React, { /*useState,*/ useEffect } from "react";
//import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch /*, connect*/ } from "react-redux";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm/ContactForm.js";
import Filter from "../components/Filter/Filter.js";
import ContactList from "../components/ContactList/ContactList.js";
import * as contactsActions from "../redux/contacts/contacts-actions";
import contactsOperations from "../redux/contacts/contacts-operations";
import contactsSelectors from "../redux/contacts/contacts-selectors";

function ContactsView(/*{ contacts, filteredContacts }*/) {
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
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
      dispatch(
        contactsOperations.addContact({ /*id: uuidv4(),*/ name, number })
      );
    }
  };

  const onDeleteContact = (contactId) => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  const onChangeFilter = (filter) => {
    dispatch(contactsActions.changeFilter(filter));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </Container>
  );
}

//const mapStateToProps = (state) => ({
//  contacts: getContacts(state),
//  filteredContacts: getFilteredContacts(state),
//});

//export default connect(mapStateToProps, null)(ContactsView);

export default ContactsView;
