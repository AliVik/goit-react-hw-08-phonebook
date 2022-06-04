import styled from 'styled-components';

export const ContactsPageSection = styled.section`
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const AddContactsWrapper = styled.div`
  background-color: #663199;
  padding: 20px 0 0 0;

  @media screen and (min-width: 769px) {
    height: 92vh;
  }
`;

export const ContactsListWrapper = styled.div`
  padding: 0 30px 0 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const ContactsImage = styled.img`
  display: block;
  max-width: 320px;
  margin: auto;
`;
export const PhonebookHeading = styled.h1`
  margin: 0 0 20px 0;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const ContactsHeading = styled.h2`
  // max-width: 200px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
`;
