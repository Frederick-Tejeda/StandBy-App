import { View, Text, Pressable } from 'react-native';

import storage from '../storage.js'
import useUserContext from '../UserContext'

export default function AccountScreen({ navigation }) {

  var { user, setUser, isLoggedIn, setIsLoggedIn, inStorage, setInStorage } = useUserContext()

  const LogOut = async () => {
    console.log('user', user)
    console.log(await storage.load({ key: 'user' }))
    try{
      const res = await storage.remove({ key: 'user' })
      user = {}
      isLoggedIn = false;
      inStorage = false;
    }catch(err){
      console.log('Some error while login out...')
    }
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen</Text>
      <Pressable onPress={LogOut}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
}