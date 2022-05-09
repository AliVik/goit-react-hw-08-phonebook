import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function PrivateRoute({children}){
    const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return IsLoggedIn?children:<Navigate to="/login"/>
}