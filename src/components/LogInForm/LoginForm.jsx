import { useFormik } from 'formik';
import { InputLabel } from './StyledLoginForm';
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
      <form onSubmit={formik.handleSubmit}>
        <h1>Log In</h1>
        <InputLabel htmlFor="email">
          <p>User email</p>

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

        <button type="submit">Submit</button>
      </form>

      <Toaster />
    </>
  );
};

export default LogInForm;
