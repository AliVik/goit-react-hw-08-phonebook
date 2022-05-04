import { useFormik } from 'formik';
import { InputLabel } from './StyledLoginForm';

 const LogInForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
          <h1>Log In</h1>
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