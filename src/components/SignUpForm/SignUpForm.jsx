import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import {
  InputLabel,
  SignUpFormHeading,
  SignUpFormInput,
  SignUpFormInputNames,
  SubmitBtn,
} from './StyledSignUpForm';
import { useSignUpUserMutation } from 'redux/api/userApiSlice';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authSlice';

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
      try {
        const returnedUser = await signUpUser(user, {
          selectFromResult: ({ data }) => data.user,
        });
        dispatch(register(returnedUser));
      } catch (error) {
        toast.error(
          'Something went wrong...Possibly, this user already exists, please try again!'
        );
      }

      formik.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <SignUpFormHeading>Sign up</SignUpFormHeading>
        <InputLabel htmlFor="name">
          <SignUpFormInputNames>Name</SignUpFormInputNames>

          <SignUpFormInput
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </InputLabel>
        <InputLabel htmlFor="email">
          <SignUpFormInputNames>E-mail</SignUpFormInputNames>

          <SignUpFormInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </InputLabel>
        <InputLabel htmlFor="password">
          <SignUpFormInputNames>Password</SignUpFormInputNames>

          <SignUpFormInput
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputLabel>
        <SubmitBtn type="submit">Sign up</SubmitBtn>
      </form>
      <Toaster />
    </>
  );
};

export default SignUpForm;
