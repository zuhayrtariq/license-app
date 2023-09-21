import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDataReady, setUserDataReady] = useState(false);
  const getUserDetails = async () => {
    return await axios.get('/get-user-data');
  };
  useEffect(() => {
    if (!user) {
      const fetchData = async () => {
        const { data } = await getUserDetails();

        setUser(data);

        setUserDataReady(true);
      };
      fetchData();
    }
  }, []);

  const valueToShare = {
    user,
    setUser,
    userDataReady,
  };
  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
};
