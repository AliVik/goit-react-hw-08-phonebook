import styled from 'styled-components';

export const GreetingHeading = styled.h1`
  font-family: 'Barrio', cursive;
  margin: 0;
  text-transform: uppercase;
  line-height: 1.6;
  letter-spacing: 2px;
  font-size: 48px;
`;

export const HomePageSection = styled.section`
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const Image = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`;

export const HomePageImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #2dc4f9;
  border-top: 4px solid #1097c7;

  @media screen and (min-width: 769px) {
    padding: 0 20px 0 20px;
    height: 92.7vh;
    border-left: 4px solid #1097c7;
    border-top: 0;
  }
`;

export const HomePageWordsWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 10px 20px 10px;
  border-bottom: 4px solid #ffff00;

  @media screen and (min-width: 769px) {
    padding: 0 20px 0 20px;
    border-right: 4px solid #ffff00;
    border-bottom: 0;
  }
`;
