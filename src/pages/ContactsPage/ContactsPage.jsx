import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { SpinnerRoundFilled } from 'spinners-react';
import {
  useGetContactsQuery,
  usePostContactMutation,
} from 'redux/api/contactsApiSlice';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { LackOfFriendsPhrase } from '../../components/Filter/StyledFilter';
import { SpinnerWrapper } from '../../StyledSpinner';
import {
  ContactsPageSection,
  AddContactsWrapper,
  ContactsListWrapper,
  ContactsImage,
  PhonebookHeading,
  ContactsHeading,
} from './StyledContactsPage';
import contactsPageImg from 'images/contactsPage2.jpg';

export default function ContactsPage() {
  const { data, isFetching, isLoading } = useGetContactsQuery();
  const [postContact] = usePostContactMutation();

  const filter = useSelector(state => state.filter);

  const HandleFormDatas = personData => {
    const normalizedDataName = personData.name.toLowerCase();
    const checkExistingContact = Object.values(data).map(contact => {
      if (!contact.name) return;
      return contact.name.toLowerCase().includes(normalizedDataName);
    });

    if (checkExistingContact.includes(true)) {
      toast.error(`${personData.name} is already in contacts`);
      return;
    } else {
      postContact(personData);
      toast.success(`${personData.name} is succesfully added to contacts`);
    }
  };

  const FilterContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return Object.values(data).filter(contact => {
      if (!contact.name) return;
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const showSpinner = isFetching && isLoading;
  const showContacts = data && data.length !== 0;
  const showMessage = data && data.length === 0 && !isFetching;
  return (
    <ContactsPageSection>
      <AddContactsWrapper>
        <PhonebookHeading>Add contact</PhonebookHeading>
        <Form onSubmit={HandleFormDatas} />
        <ContactsImage src={contactsPageImg} alt="phones image" />
      </AddContactsWrapper>
      <ContactsListWrapper>
        <ContactsHeading>Contacts</ContactsHeading>

        {showContacts && <Filter />}

        {showMessage && (
          <LackOfFriendsPhrase>
            You don`t have any contact :(
          </LackOfFriendsPhrase>
        )}

        {data && <ContactList contacts={FilterContactList()} />}

        <Toaster />
        {showSpinner && (
          <SpinnerWrapper>
            <SpinnerRoundFilled size="50%" color="#630990" />
          </SpinnerWrapper>
        )}
      </ContactsListWrapper>
    </ContactsPageSection>
  );
}
