import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function PublicRoute({children,props}){
    const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = IsLoggedIn;

    return shouldRedirect?<Navigate to="/contacts"/>:children;
}