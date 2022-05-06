import {SuccessLogInWrapper, LogOutButton, GreetingText,GreetingTextWrapper} from './StyledUserMenu';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'features/authSelectors';
import { useLogOutUserMutation } from 'features/apiSlice';
import {logOut} from 'features/authSlice';


export default function UserMenu(){
  const userEmail = useSelector(authSelectors.getUserEmail);
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch()
  const userToken = useSelector(authSelectors.getUserToken);

  const [logOutUser] = useLogOutUserMutation();

  const onLogOutBtnSubmit= async () =>{
  
   const returnedUser = await logOutUser(userToken, {
    selectFromResult: ({data}) => data.user
   })
  dispatch(logOut(returnedUser));
  }
  
    return (
     <SuccessLogInWrapper>
       <GreetingTextWrapper>
       <GreetingText>Welcome, {userName}</GreetingText>
        <GreetingText>{userEmail}</GreetingText>
       </GreetingTextWrapper>
       
        <LogOutButton type="submit" onClick={()=>onLogOutBtnSubmit()}>Log out</LogOutButton>
        
      </SuccessLogInWrapper>
       
    )
    }