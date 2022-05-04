
import { Outlet } from 'react-router-dom';
import {Header,StyledLink} from './StyledLayout';
import {Wrapper} from './StyledLayout'

export default function Layout() {
  return (
    <Wrapper>
      <Header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/sign_up">Sign up</StyledLink>
        <StyledLink to="/log_in">Log in</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </Header>

      <Outlet />
    </Wrapper>
  );
}
