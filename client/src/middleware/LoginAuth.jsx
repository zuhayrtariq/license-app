import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const LoginRoute = ({ children }) => {
  const { user, userDataReady } = useContext(UserContext);
  if (userDataReady) {
    if (!user) {
      return <Navigate to={'/'} replace />;
    }
    return children;
  }
};
export default LoginRoute;
