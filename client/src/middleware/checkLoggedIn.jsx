import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const CheckLoggedIn = ({ children }) => {
  const { user, userDataReady } = useContext(UserContext);
  if (userDataReady) {
    console.log('This is user', user);
    if (user) {
      return <Navigate to={'/sections'} replace />;
    }
    return children;
  }
};
export default CheckLoggedIn;
