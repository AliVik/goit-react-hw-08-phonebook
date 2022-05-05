import {SuccessLogInWrapper, LogOutButton, GreetingText} from './StyledUserMenu';


export default function UserMenu(){
    return (
        <SuccessLogInWrapper>
        <GreetingText>Welcome!You are in</GreetingText>
        <LogOutButton type="submit">Log out</LogOutButton>
      </SuccessLogInWrapper>
    )
    }