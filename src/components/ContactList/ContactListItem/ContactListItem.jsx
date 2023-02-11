import PropTypes from 'prop-types';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/operations';

import { Items, Link, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Items>
      <Link href="tel:{number}">
        <BsTelephone />
      </Link>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Items>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
