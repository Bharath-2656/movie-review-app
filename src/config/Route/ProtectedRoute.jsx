import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  
  const user  = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log(user);
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
