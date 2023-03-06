export const getAllContacts = state => state.contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {    // cheking if filter input is empty (false) then do nothing
      return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name, phone }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        phone.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
};