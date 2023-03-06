import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, getFilteredContacts } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations.js';

export const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
 
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <>
        {filteredContacts.length !== 0 && <ContactList />}
        {filteredContacts.length === 0 && allContacts.length !== 0 && (
          <p
            style={{
              marginTop: '40px',
              fontSize: '19px',
              color: '#1a80d4',
              textAlign: 'center',
            }}
          >
            There is no filtered result according your request.
          </p>
        )}
        {allContacts.length === 0 && (
          <p
            style={{
              marginTop: '40px',
              fontSize: '19px',
              color: '#1a80d4',
            }}
          >
            Your contacts list is empty. Please add contact.
          </p>
        )}
      </>
    </div>
  );
};



