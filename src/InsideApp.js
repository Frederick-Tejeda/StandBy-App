import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import useUserContext from './UserContext'
import storage from './storage.js'

import AddScreen from './Views/Add'
import SortScreen from './Views/Sort'
import AccountScreen from './Views/Account'
import SignScreen from './Views/Sign'
import LogScreen from './Views/Log'

export default function InsideApp(){

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

  var { user, setUser } = useUserContext(); 
  var { isLoggedIn, setIsLoggedIn } = useUserContext(); 
  var { inStorage, setInStorage } = useUserContext(); 
  const [changeView, setChangeView] = useState(isLoggedIn)
  console.log('changeView', changeView)

  const CheckStorage = async () => {
    try{
        const res = await storage.load({key: 'user'})
        console.log('res', res)
        if(user?.name !== res?.name){ 
          console.log('user?.name !== res?.name')
          user = res 
          inStorage = true
        }
      }catch(err){
        console.log('No loaded user')
        inStorage = false
    }
  }
  const SaveUser = async () => {
    console.log('SaveUser')
    let state = ReturnInStorage()
    console.log('State in Save User', state)
    if(!state){
      console.log('Saving user')
      storage.save({
        key: 'user',
        data: user,
        expires: null
      })
     isLoggedIn = true 
     setChangeView(true)
    }
  }

  //useEffect(() => { console.log(`isLoggedIn: ${isLoggedIn} || changeView: ${changeView}`); setChangeView((prev) => !prev) }, [isLoggedIn])

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn)
    if(isLoggedIn){
      CheckStorage()
    }else{
      SaveUser()
    }
    console.log(storage)
    const SeeStorage = async () => {
      console.log(await storage.load({ key: 'user' }))
    }
    SeeStorage()
  }, [user])

  return (
      <NavigationContainer>
        { changeView ? (
        <>
          <Navigator screenOptions={{ headerShown: false }} initialRouteName="Sort">
            <Screen name="Add" component={AddScreen} options={{ title: "Add" }} />
            <Screen name="Sort" component={SortScreen} options={{ title: "Sort" }} />
            <Screen name="Account" component={AccountScreen} options={{ title: "Account" }} />
          </Navigator>
        </>
        ) : (
        <>
          <Navigator screenOptions={{ headerShown: false }} initialRouteName="Sign">
            <Screen name="Sign" component={SignScreen} options={{ title: "Sign" }} />
            <Screen name="Log" component={LogScreen} options={{ title: "Log" }} />
          </Navigator>
        </>
        )}
      </NavigationContainer>
  );
}