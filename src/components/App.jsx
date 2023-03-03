import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import StyledContainer from './General.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledContainer>
    </>
  );
}
