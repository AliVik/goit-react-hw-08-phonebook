import { useFormik } from 'formik';
import { InputLabel } from './StyledLoginForm';
import {useLogInUserMutation} from 'features/apiSlice';
import { useDispatch,useSelector } from 'react-redux';
import authSelectors from 'features/authSelectors';
import { logIn } from 'features/authSlice';

 const LogInForm = () => {
   const [logInUser] = useLogInUserMutation();
   const dispatch = useDispatch();
   
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: async user => {
          console.log(user)
          const returnedUser = await logInUser(user, {
            selectFromResult: ({data}) => console.log(data.user)
          })
        dispatch(logIn(returnedUser))
        formik.resetForm();
          },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
          <h1>Log In</h1>
          <InputLabel htmlFor="email">
            <p>User email</p>
            
            <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
          
          />
            </InputLabel>
            <InputLabel htmlFor="password">
            <p>Password</p>
            
            <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
         
          />
            </InputLabel>
        
    
          <button type="submit">Submit</button>
        </form>
      );

}

export default LogInForm;