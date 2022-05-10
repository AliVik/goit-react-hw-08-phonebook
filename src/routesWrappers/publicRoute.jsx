import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function PublicRoute({children, restricted = false}){
    const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = IsLoggedIn&&restricted;

    return shouldRedirect?<Navigate to="/contacts"/>:children;
}