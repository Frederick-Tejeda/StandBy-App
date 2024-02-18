import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react'
import axios from 'axios'
import Styles from '../Styles/In.js'

const ServerUrl = 'https://standby-yd62.onrender.com';

export default function SignScreen({ navigation }) {

  const [name, onChangeName] = useState('')
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const [repeatedPassword, onChangeRepeatedPassword] = useState('')
  const [message, setMessage] = useState('')

  const Validate = async () => {
      let usersRightNow = await axios.get(`${ServerUrl}/users`)
      if(name.length < 1 || username.length < 1 || password.length < 1 || repeatedPassword.length < 1){
          setMessage('Field or fileds empty...')
          return
      }else if(password !== repeatedPassword){
          setMessage(`Passwords doesn't match...`)
          return
      }else if(usersRightNow.data.find((u) => u.username === username)){
          setMessage(`Username allready in use...`)
          return
      }else{
          const PostIt = async () => {
              await axios.post(`${ServerUrl}/users`, newUser)
              navigation.navigate('Log')
          }
          let newUser = { name, username }
          try{
              const encryptedPassword = await axios.post(`${ServerUrl}/crypt/encrypt/`, {texts: new Array(password)})
              newUser.password = encryptedPassword.data.encrypted[0]
              PostIt()
          }catch(err){
              console.log('Some error happened...')
          }
      }
  }

  return (
    <>
    <View style={Styles?.Main}>
        <View style={Styles?.Main?.Header}>
            <Text style={Styles?.Main?.Header?.Text}>Sign in</Text>
        </View>
        <View style={Styles?.Main?.InContainer}>
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangeName} value={name} placeholder="Name" />
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangeUsername} value={username} placeholder="Username" />
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangePassword} value={password} placeholder="Password" />
            <TextInput style={Styles?.Main?.InContainer?.TextInput} onChangeText={onChangeRepeatedPassword} value={repeatedPassword} placeholder="Repeat password" />
            <Text style={{height: '20px', textAlign: 'center', fontSize: 19}}>{ message }</Text>
        </View>
        <View style={Styles?.Main?.SendContainer}>
            <Pressable style={Styles?.Main?.SendContainer?.Pressable} onPress={() => Validate()}>
              <Text style={Styles?.Main?.SendContainer?.Pressable?.Text}>Sign in</Text>
            </Pressable>
        </View>
    </View>
    </>
  );
}