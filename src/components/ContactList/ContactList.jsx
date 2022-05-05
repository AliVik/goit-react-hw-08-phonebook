import PropTypes from 'prop-types';
import {
  ContactListTag,
  ContactListItem,
  ContactName,
  DeleteBtn,
} from './StyledContactList';
// import {useDeleteContactFromApiMutation} from '../../features/apiSlice';

export default function ContactList({ contacts }) {
  // const [deleteContact] = useDeleteContactFromApiMutation()
  return (
    <>
      <ContactListTag>
        {contacts.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <ContactName>
                {contact.name}: {contact.number}
              </ContactName>
              <DeleteBtn
                type="button"
                onClick={()=>console.log("Deleted")}
              >
                Delete
              </DeleteBtn>
            </ContactListItem>
          );
        })}
      </ContactListTag>
    </>
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
