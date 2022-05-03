
import { Outlet } from 'react-router-dom';
import {Header,StyledLink} from './StyledLayout';
import {Wrapper} from './StyledLayout'

export default function Layout() {
  return (
    <>
      <Header>
        <StyledLink to="/sign-up-form">Sign up</StyledLink>
        <StyledLink to="/log-in-form">Log in</StyledLink>
      </Header>
      <section>
        <Wrapper>
          <h1>Welcome to The Web Phonebook App!</h1>
        </Wrapper>
      </section>
    </>
  );
}
