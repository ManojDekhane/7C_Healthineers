import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/firebaseContext"; 

const PrivateRoute = () => {
    const { userLoggedIn } = useAuth(); 

    return userLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
