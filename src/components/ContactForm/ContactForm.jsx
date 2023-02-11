import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

import { Label, Input, Form, Button, IconBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const isIncludesName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!isIncludesName) {
      dispatch(addContacts({ name, number }));
      event.target.reset();
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">
        Add contact
        <IconBtn />
      </Button>
    </Form>
  );
};
