import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading, getError } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from './Loader/Loader';

import { GlobalStyle } from './GlobalStyles';
import { Wrapper, Title, Caption } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Phonebook</Title>

      <ContactForm />

      <Caption>Contacts</Caption>
      {contactsItems.length > 0 && <Filter />}
      {isLoading && !error && <Loader />}
      {contactsItems.length > 0 && <ContactList />}
    </Wrapper>
  );
};
