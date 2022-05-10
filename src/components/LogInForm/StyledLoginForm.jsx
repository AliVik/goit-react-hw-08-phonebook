import styled from 'styled-components';

export const InputLabel = styled.label`
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const LoginFormHeading = styled.h1`
  margin-bottom: 20px;
  margin-top: 0;
  text-transform: uppercase;
  text-align: center;
`;

export const LoginFormInputNames = styled.p`
  margin: 0;
  font-weight: bold;
  text-align: center;
`;

export const LoginFormInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  &:hover,
  &:focus {
    border-bottom: 2px solid #000;
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  margin: auto;
  font-weight: bold;
`;
