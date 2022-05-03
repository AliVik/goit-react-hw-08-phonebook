import { NavLink } from 'react-router-dom';

// import toast, { Toaster } from 'react-hot-toast';
// import { useSelector, useDispatch } from 'react-redux';
// import { SpinnerRoundFilled } from 'spinners-react';
// import {
//   Wrapper,
//   PhonebookHeading,
//   ContactsHeading,
// } from './Form/StyledForm';
// import Form from './Form';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { LackOfFriendsPhrase } from './Filter/StyledFilter';
// import {
//   useGetContactsFromApiQuery,
//   useAddContactToApiMutation,
// } from 'features/apiSlice';
// import { SpinnerWrapper } from '../StyledSpinner';

// export default function App() {
//   const { data, isFetching, isLoading } = useGetContactsFromApiQuery();
//   const [addContact] = useAddContactToApiMutation();

//   const filter = useSelector(state => state.filter);

//   const HandleFormDatas = personData => {
//     const normalizedDataName = personData.name.toLowerCase();
//     const checkExistingContact = Object.values(data).map(contact => {
//       if (!contact.name) return;
//       return contact.name.toLowerCase().includes(normalizedDataName);
//     });

//     checkExistingContact.includes(true)
//       ? toast.error(`${personData.name} is already in contacts`)
//       : addContact(personData);
//   };

//   const FilterContactList = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return Object.values(data).filter(contact => {
//       if (!contact.name) return;
//       return contact.name.toLowerCase().includes(normalizedFilter);
//     });
//   };

//   const showSpinner = isFetching && isLoading;
//   const showContacts = data && data.length !== 0;
//   const showMessage = data && data.length === 0 && !isFetching;
//   return (
//     <Wrapper>
//       <PhonebookHeading>Phonebook</PhonebookHeading>
//       <Form onSubmit={HandleFormDatas} />
//       <ContactsHeading>Contacts</ContactsHeading>

//       {showContacts && <Filter />}

//       {showMessage && (
//         <LackOfFriendsPhrase>You don`t have any contact :(</LackOfFriendsPhrase>
//       )}

//       {data && <ContactList contacts={FilterContactList()} />}

//       <Toaster />
//       {showSpinner && (
//         <SpinnerWrapper>
//           <SpinnerRoundFilled size="50%" color="#630990" />
//         </SpinnerWrapper>
//       )}
//     </Wrapper>
//   );
// }

export default function MainPage() {
  return (
    <>
      <header>
        <NavLink to="/register">Sign up</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </header>

      <section>
        <div>
          <h1>Welcome to Web Phonebook App!</h1>
        </div>
      </section>
    </>
  );
}
