import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { useEffect, useState } from 'react';

import storage from './src/storage'
import InsideApp from './src/InsideApp'
import { UserContext } from './src/UserContext'

const App = () => {

  const ReturnInStorage = async () => {
        let value
        try{
          const res = await storage.load({key: "user"})
          value = true
        }catch(err){
          value = false
        }
        console.log('Value', value)
        return value
      }

  var [user, setUser] = useState({});
  var [inStorage, setInStorage] = useState(ReturnInStorage())
  var [isLoggedIn, setIsLoggedIn] = useState(ReturnInStorage())
 
    return (
        <UserContext.Provider value={{ user, setUser, inStorage, setInStorage, isLoggedIn, setIsLoggedIn }}>
            <InsideApp />
        </UserContext.Provider>
    );
};

export default App