import styled from 'styled-components';

export const RegisterSection = styled.section`
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const Image = styled.img`
  display: block;
  max-height: 450px;
  max-width: 320px;
  margin: auto;
`;

export const RegisterImageWrapper = styled.div`
  background-color: #41b0e5;
  display: flex;
  height: 100%;

  @media screen and (min-width: 769px) {
    padding: 0 20px 0 20px;
    height: 92.7vh;
    width: 50%;
  }
`;

export const RegisterFormWrapper = styled.div`
  margin: auto;
  padding: 20px 30px 20px 30px;
  border-bottom: 4px solid #ffff00;

  @media screen and (min-width: 769px) {
    padding: 0 30px 0 30px;
    border-bottom: 0;
  }
`;
