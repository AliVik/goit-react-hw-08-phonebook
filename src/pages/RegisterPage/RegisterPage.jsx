import SignUpForm from 'components/SignUpForm';
import {
  RegisterSection,
  Image,
  RegisterImageWrapper,
  RegisterFormWrapper,
} from './StyledRegisterPage';
import registerImg from 'images/registerpage.jpg';

export default function RegisterPage() {
  return (
    <RegisterSection>
      <RegisterFormWrapper>
        <SignUpForm />
      </RegisterFormWrapper>
      <RegisterImageWrapper>
        <Image src={registerImg} alt="girl with robot" />
      </RegisterImageWrapper>
    </RegisterSection>
  );
}
