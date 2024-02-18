import { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';
import axios from 'axios'
import Styles from '../Styles/In.js'
import { useDataContext } from '../Context/DataContext'
import storage from '../storage'

const ServerUrl = 'https://standby-yd62.onrender.com';

export default function LogScreen({ navigation }) {

  const { login, ChangeUser } = useDataContext();

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

      const SaveUserInStorage = async (currentUser) => {
        try{
          await storage.save({ key: 'user', data: currentUser })
          console.log('User saved sucessful!')
        }catch(err){
          console.log('Some error while saving user...')
        }
      }

      let currentUser = users.find(u => u.username === username);

      if(currentUser){
          try{
              const decryptedPassword = await axios.post(`${ServerUrl}/crypt/decrypt`, {texts: new Array(currentUser.password)})
              if(password === decryptedPassword.data.decrypted[0]){
                  console.log('User done')
                  SaveUserInStorage(currentUser)
                  console.log('User saved')
                  ChangeUser(currentUser)
                  login()
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
            <Text style={{height: '20px', textAlign: 'center', fontSize: 19}}>{ message }</Text>
        </View>
        <View style={Styles?.Main?.SendContainer}>
            <Pressable style={Styles?.Main?.SendContainer?.Pressable} onPress={() => Validate()}>
              <Text style={Styles?.Main?.SendContainer?.Pressable?.Text}>Log in</Text>
            </Pressable>
        </View>
    </View>
  );
}
