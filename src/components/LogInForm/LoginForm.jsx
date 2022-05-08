import { useFormik } from 'formik';
import { InputLabel } from './StyledLoginForm';
import {useLogInUserMutation} from 'redux/api/userApiSlice';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

 const LogInForm = () => {
   const [logInUser] = useLogInUserMutation();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async user => {
          const returnedUser = await logInUser(user, {
            selectFromResult: ({data}) => data.user
          })
        dispatch(logIn(returnedUser))
        navigate('/contacts')
     

        formik.resetForm()
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
      );

}

export default LogInForm;