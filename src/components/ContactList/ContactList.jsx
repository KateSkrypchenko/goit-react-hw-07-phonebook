import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

import { ContactListItem } from './ContactListItem/ContactListItem';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} key={id} />
      ))}
    </List>
  );
};
