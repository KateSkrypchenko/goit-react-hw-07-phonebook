import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { ContactListItem } from './ContactListItem/ContactListItem';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContactItem = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterItem = contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    return filterItem;
  };

  const visibleContacts = filterContactItem();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} key={id} />
      ))}
    </List>
  );
};
