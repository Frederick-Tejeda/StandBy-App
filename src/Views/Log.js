import { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';
import axios from 'axios'
import Styles from '../Styles/In.js'

import useUserContext from '../UserContext'

const ServerUrl = 'https://standby-yd62.onrender.com';

export default function LogScreen({ navigation }) {

  var { user, setUser } = useUserContext();

  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const [message, setMessage] = useState('')

  const Validate = async () => {
      console.log('Validate')
      let users = await axios.get(`${ServerUrl}/users`)
      users = users.data;

      if(username.length < 1 || password.length < 1){
          setMessage('Field or fileds empty...')
          return
      }

      let currentUser = users.find(u => u.username === username);

      if(currentUser){
          try{
              const decryptedPassword = await axios.post(`${ServerUrl}/crypt/decrypt`, {texts: new Array(currentUser.password)})
              if(password === decryptedPassword.data.decrypted[0]){
                  console.log('Decrypted correctly')
                  console.log('User ready')
                  user = currentUser;
                  console.log('User done')
              }else{
                  setMessage('Username or password wrong...')
              }
          }catch(err){
              console.log('error...')
          }
      }else{
          setMessage('Username or password wrong...')
      }
    }

  return (
    <View style={Styles?.MainLog}>
        <View style={Styles?.Main?.Header}>
            <Text style={Styles?.Main?.Header?.Text}>Log in</Text>
        </View>
        <View style={Styles?.Main?.InContainer}>
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangeUsername} value={username} placeholder="Username" />
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangePassword} value={password} placeholder="Password" />
            <Text style={{height: '20px', textAlign: 'center'}}>{ message }</Text>
        </View>
        <View style={Styles?.Main?.SendContainer}>
            <Pressable style={Styles?.Main?.SendContainer?.Pressable} onPress={() => Validate()}>
              <Text style={Styles?.Main?.SendContainer?.Pressable?.Text}>Log in</Text>
            </Pressable>
        </View>
    </View>
  );
}
