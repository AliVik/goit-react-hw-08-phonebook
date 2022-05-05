import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
display: flex;
padding: 10px;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid grey;
`
export const StyledLink = styled(NavLink)`
display: inline-block;
margin-left: 10px;
text-decoration: none;
color: #000;
&.active{
    color: red;
}
`
export const Wrapper = styled.div`
padding: 0 20px 0 20px;
`
