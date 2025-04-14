import {Navigate ,Outlet} from 'react-router-dom';

const ProtectedRoutes=()=>{
    const token=localStorage.getItem('logintoken');
    console.log(token,'sds');
    return token ?<Outlet/> :<Navigate to="/login"/>;
}

export default ProtectedRoutes