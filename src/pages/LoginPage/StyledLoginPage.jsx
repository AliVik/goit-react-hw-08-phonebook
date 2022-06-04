import styled from 'styled-components';

export const LoginSection = styled.section`
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
export const LoginImageWrapper = styled.div`
  background-color: #17020e;
  display: flex;
  height: 100%;
  border-bottom: 4px solid #1097c7;

  @media screen and (min-width: 769px) {
    padding: 0 20px 0 20px;
    height: 92.7vh;
    width: 50%;
    border-bottom: 0;
  }
`;

export const LoginFormWrapper = styled.div`
  margin: auto;
  padding: 30px 30px 30px 30px;
  border-top: 4px solid #ffff00;

  @media screen and (min-width: 769px) {
    padding: 0 30px 0 30px;
    border-top: 0;
  }
`;
