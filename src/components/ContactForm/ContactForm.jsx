import css from './/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';

const initialState = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });


  const dispatch = useDispatch();

  const handleAddContact = ({ name, phone }) => {
    dispatch(addContact({ name, phone }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ ...initialState }); // reset function
  };

  const { name, phone } = state;

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <div className={css.block}>
        <label htmlFor="">Name</label>
        <input
          onChange={handleChange}
          value={name}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.block}>
        <label htmlFor="">Number</label>
        <input
          onChange={handleChange}
          value={phone}
          className={css.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
