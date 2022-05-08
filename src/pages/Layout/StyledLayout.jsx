import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
display: flex;
padding: 10px;
height: 30px;
align-items: center;
border-bottom: 1px solid grey;
background-color: #000;
`
export const StyledLink = styled(NavLink)`
display: inline-block;
margin-left: 10px;
text-decoration: none;
color: #fff;
&.active{
    color: orange;
    text-decoration: underline;
}
`
export const Wrapper = styled.div`
padding: 0 20px 0 20px;

`
