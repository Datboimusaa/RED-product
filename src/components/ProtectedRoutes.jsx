import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem('token');
    if(!token){
        return(<Navigate to="/" replace/>);
    }else{
        return(<Outlet />)
    }
    
}

export default ProtectedRoutes