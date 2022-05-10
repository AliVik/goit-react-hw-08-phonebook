import PropTypes from 'prop-types';
import {
  ContactListTag,
  ContactListItem,
  ContactName,
  DeleteBtn,
} from './StyledContactList';
import { useDeleteContactMutation } from 'redux/api/contactsApiSlice';

export default function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ContactListTag>
      {contacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <ContactName>
              {contact.name}: {contact.number}
            </ContactName>
            <div>
              <DeleteBtn
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </DeleteBtn>
            </div>
          </ContactListItem>
        );
      })}
    </ContactListTag>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
