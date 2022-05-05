
import { Outlet } from 'react-router-dom';
import {Header,StyledLink} from './StyledLayout';
import {Wrapper} from './StyledLayout';
import UserMenu from 'components/UserMenu';

export default function Layout() {
  return (
    <Wrapper>
      <Header>
        <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/register">Sign up</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        </div>
        
     
      </Header>

      <Outlet />
    </Wrapper>
  );
}
