
import { Outlet } from 'react-router-dom';
import {Header,StyledLink, SuccessLogInWrapper, LogOutButton, GreetingText} from './StyledLayout';
import {Wrapper} from './StyledLayout'

export default function Layout() {
  return (
    <Wrapper>
      <Header>
        <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/sign_up">Sign up</StyledLink>
        <StyledLink to="/log_in">Log in</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        </div>
        
        <SuccessLogInWrapper>
          <GreetingText>Welcome!You are in</GreetingText>
          <LogOutButton type="submit">Log out</LogOutButton>
        </SuccessLogInWrapper>
      </Header>

      <Outlet />
    </Wrapper>
  );
}
