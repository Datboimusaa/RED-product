import { Navigate, useSearchParams, Outlet } from "react-router-dom";

function ParamsRoutes({requiredParam}) {
    const [searchParams] = useSearchParams();
    const param = searchParams.get(requiredParam)
    return  param ? <Outlet /> : <Navigate to="/" replace/>
}

export default ParamsRoutes