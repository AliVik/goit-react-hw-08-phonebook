import { useFormik } from 'formik';
import {
  InputLabel,
  LoginFormHeading,
  LoginFormInput,
  LoginFormInputNames,
  SubmitBtn,
  LoginFormTag,
} from './StyledLoginForm';
import { useLogInUserMutation } from 'redux/api/userApiSlice';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authSlice';

import toast, { Toaster } from 'react-hot-toast';

const LogInForm = () => {
  const [logInUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async user => {
      try {
        const returnedUser = await logInUser(user, {
          selectFromResult: ({ data }) => data.user,
        });
        dispatch(logIn(returnedUser));
      } catch (error) {
        toast.error(
          'Wrong username or e-mail. If you`re not signed up yet, you`re welcome to do it!'
        );
      }

      formik.resetForm();
    },
  });
  return (
    <>
      <LoginFormTag onSubmit={formik.handleSubmit}>
        <LoginFormHeading>Log In</LoginFormHeading>
        <InputLabel htmlFor="email">
          <LoginFormInputNames>E-mail</LoginFormInputNames>

          <LoginFormInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </InputLabel>
        <InputLabel htmlFor="password">
          <LoginFormInputNames>Password</LoginFormInputNames>

          <LoginFormInput
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputLabel>

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </LoginFormTag>

      <Toaster />
    </>
  );
};

export default LogInForm;
