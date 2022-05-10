import LogInForm from '../../components/LogInForm/LoginForm';
import {
  LoginSection,
  Image,
  LoginImageWrapper,
  LoginFormWrapper,
} from './StyledLoginPage';
import loginImg from 'images/loginpage.jpg';

export default function LoginPage() {
  return (
    <LoginSection>
      <LoginImageWrapper>
        <Image src={loginImg} alt="hacker girl login" />
      </LoginImageWrapper>
      <LoginFormWrapper>
        <LogInForm />
      </LoginFormWrapper>
    </LoginSection>
  );
}
