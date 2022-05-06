import styled from "styled-components";

export const GreetingHeading = styled.h1`
margin: 0;
margin-top: 100px;
margin-right:100px;
max-width: 400px;
`
export const GreetingWords = styled.span`
display: block;
&:not(:last-child){
    margin-bottom: 10px;
}

`
export const HomePageSection = styled.section`
padding: 50px 0 50px 0;
display: flex;
justify-items: space-between;
`

export const Image = styled.img`
display: block;
width: 450px;
`