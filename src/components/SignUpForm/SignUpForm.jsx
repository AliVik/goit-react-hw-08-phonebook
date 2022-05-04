import { useFormik } from 'formik';
import { InputLabel } from './StyledSignUpForm';

 const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Sign Up</h1>
              <InputLabel htmlFor="username">
              <p>User name</p>
              
              <input
            id="username"
            name="username"
            type="username"
            onChange={formik.handleChange}
            value={formik.values.username}
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
          
         
    
          <button type="submit">Sign Up</button>
        </form>
      );

}

export default SignUpForm;