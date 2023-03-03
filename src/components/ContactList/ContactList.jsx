import { ContactItem } from 'components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import {
  // selectContacts,
  // selectFilter,
  selectFilterContacts,
} from 'redux/selectors';
import StyledList from './ContactList.styled';

export function ContactList() {
  // const filter = useSelector(selectFilter);
  // const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  // );

  return (
    <StyledList>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} btnId={id} />
      ))}
    </StyledList>
  );
}
