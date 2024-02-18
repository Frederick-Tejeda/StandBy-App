import { createContext, useContext, useState, useEffect } from 'react';
import storage from '../storage'

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPlace, setLoginPlace] = useState("Sign");
  const [usingPlace, setUsingPlace] = useState("Sort");

  storage.load({ key: 'user' })
  .then(res => {
    console.log('User Loaded from storage!')
    setUser(res)
    setIsLoggedIn(true)
  })
  .catch(err => {
    console.log('No found user')
  })


  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  //

  const RemoveUser = () => {
    setUser(() => {})
  };

  const ChangeUser = (u) => {
    setUser(() => u);
  };

  //

  const GoSignPlace = (p) => {
    setLoginPlace(() => 'Sign')
  };

  const GoLogPlace = (p) => {
    setLoginPlace(() => 'Log')
  };

  const GoAddPlace = (p) => {
    setUsingPlace(() => 'Add')
  };

  const GoSortPlace = (p) => {
    setUsingPlace(() => 'Sort')
  };

  const GoAccountPlace = (p) => {
    setUsingPlace(() => 'Account')
  };
  
  useEffect(() => {
    console.log(`user: ${JSON.stringify(user)}, isLoggedIn: ${isLoggedIn}`)
  }, [user])


  return (
    <DataContext.Provider value={{ isLoggedIn, login, logout, user, 
    RemoveUser, ChangeUser, user, RemoveUser, ChangeUser, loginPlace, GoSignPlace, GoLogPlace, GoAddPlace, GoSortPlace, GoAccountPlace, usingPlace }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};