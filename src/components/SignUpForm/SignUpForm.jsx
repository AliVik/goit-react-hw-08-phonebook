import { useFormik } from 'formik';
import { InputLabel } from './StyledSignUpForm';
import { useSignUpUserMutation } from 'redux/api/userApiSlice';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authSlice';
import registerImg from 'images/registerpage.jpg';
import {RegisterSection,Image,RegisterImageWrapper, RegisterFormWrapper} from './StyledSignUpForm';

 const SignUpForm = () => {
   const [signUpUser] = useSignUpUserMutation();
   const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async user => {
      const returnedUser = await signUpUser(user,{
        selectFromResult: ({data}) => data.user
      });
     
       dispatch(register(returnedUser));
       formik.resetForm();
          },
        
    })
  
    return (
      <RegisterSection>
        <RegisterFormWrapper>
        <form onSubmit={formik.handleSubmit}>
            <h1>Sign up</h1>
              <InputLabel htmlFor="name">
              <p>User name</p>
              
              <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          </InputLabel>
          <InputLabel htmlFor="email">
              <p>Email Address</p>
              
              <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          </InputLabel>
          <InputLabel htmlFor="password">
              <p>Password</p>
              
              <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          </InputLabel>
          <button type="submit">Sign up</button>
        </form>
        </RegisterFormWrapper>
        <RegisterImageWrapper>
          <Image src={registerImg} alt="girl with robot" />
        </RegisterImageWrapper>

      </RegisterSection>
        
      );

}

export default SignUpForm;