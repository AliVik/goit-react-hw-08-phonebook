import {SuccessLogInWrapper, LogOutButton, GreetingText,GreetingTextWrapper} from './StyledUserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'features/authSelectors';


export default function UserMenu(){
  const userEmail = useSelector(authSelectors.getUserEmail);
  const userName = useSelector(authSelectors.getUserName);
  
    return (
     <SuccessLogInWrapper>
       <GreetingTextWrapper>
       <GreetingText>Welcome, {userName}</GreetingText>
        <GreetingText>{userEmail}</GreetingText>
       </GreetingTextWrapper>
       
        <LogOutButton type="submit">Log out</LogOutButton>
        
      </SuccessLogInWrapper>
       
    )
    }