
import { Outlet } from 'react-router-dom';
import {Header,StyledLink} from './StyledLayout';
import {Wrapper} from './StyledLayout';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../features/authSelectors'




export default function Layout() {
const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn)
console.log(IsLoggedIn)
  return (
    <Wrapper>
      <Header>
        <div>
        <StyledLink to="/">Home</StyledLink>
        {/* {!IsLoggedIn && <> */}
          <StyledLink to="/register">Sign up</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
        {/* </> */}
        {/* } */}
       
        {/* {IsLoggedIn&&  */}
        <StyledLink to="/contacts">Contacts</StyledLink>
        {/* // } */}
       
        </div>
        {IsLoggedIn&&<UserMenu/>}
     
      </Header>

      <Outlet />
    </Wrapper>
  );
}
