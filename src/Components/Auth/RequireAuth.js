import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Shared/Loader";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    // console.log(user)
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;