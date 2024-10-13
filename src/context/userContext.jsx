'use client'

import { createContext, useState, useEffect } from 'react';
import axiosInstance from '@/lib/axiosInstance';


const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [userGlobal, setUserGlobal] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const API = await axiosInstance.get("/users/get-user");
        setUserGlobal(API.data.user); 
      } catch (error) {
        console.error("Error decoding token or fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{UserInfo: userGlobal, setUserGlobal}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider}
