import styled from "styled-components";

export const ContactListTag = styled.ul`
  padding: 0;
  margin-top: 30px;
`;

export const ContactListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-shadow: -1px 1px 15px -9px rgba(34, 60, 80, 0.6);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  background-color: #bd2d3c;
  cursor: pointer;
  color: #fff;
  border: none;
  height: 30px;
`;

export const PatchButton = styled.button`
margin-right: 5px;
cursor: pointer;
padding: 0 10px 0 10px;
background-color: #630990;
color: #fff;
border: none;
height: 30px;

`