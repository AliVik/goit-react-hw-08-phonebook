import styled from 'styled-components';

export const ContactListTag = styled.ul`
  padding: 0;
  margin-top: 30px;
`;

export const ContactListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 400px;
  align-items: baseline;
  background-color: #000;
  :not(:last-child) {
    margin-bottom: 2px;
  }
`;

export const ContactName = styled.span`
  margin-right: 10px;
  color: #fff;
  text-transform: uppercase;
`;

export const DeleteBtn = styled.button`
  background-color: #bd2d3c;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
`;
