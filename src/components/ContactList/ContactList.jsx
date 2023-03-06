import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';


export const ContactList = () => {

const filteredContacts = useSelector(getFilteredContacts);
const dispatch = useDispatch();

const handleDeleteContact = id => {
  dispatch(deleteContact(id));
};

  
  const contact = filteredContacts.map(({ id, name, phone }) => (
    <li className={css.item} key={id}>
      {name}: {phone}
      <button
        onClick={() => handleDeleteContact(id)}
        type="button"
        className={css.btn}
      >
        Delete
      </button>
    </li>
  ))

  return <ul className={css.list}>
    {contact}
  </ul>;
};
