import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  max-width: 320px;
  margin: auto;
  text-align: center;
`;
export const LabelName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const LackOfFriendsPhrase = styled.p`
  max-width: 250px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  &:hover,
  &:focus {
    border-bottom: 2px solid #000;
  }
  outline: none;
`;
