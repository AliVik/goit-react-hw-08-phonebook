import styled from "styled-components";

export const GreetingHeading = styled.h1`
margin: 0;
`
export const GreetingWords = styled.span`
display: block;
&:not(:last-child){
    margin-bottom: 10px;
}

`
export const HomePageSection = styled.section`
padding: 0 0 50px 0;
display: flex;
justify-items: space-between;

`

export const Image = styled.img`
display: block;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 92vh;
`

export const HomePageImageWrapper = styled.div`
padding: 50px 200px 0 50px;
position: relative;
width: 100%;
margin-left: 100px;
`

export const HomePageWordsWrapper = styled.div`
padding: 170px 20px 0 30px;
`