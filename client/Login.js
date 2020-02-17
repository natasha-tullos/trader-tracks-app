import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


import Firebase from '../config';

const Login = (props) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginWithEmail = async () => {
    // const provider = new Firebase.auth.GoogleAuthProvider();

    await Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        setToken(result.credential.accessToken);

        setUser(result.user);
      })

  }

  return (
    <View style={styles.containerStyle}>
      <Text 
        style={styles.title}
        textAnchor='middle'
      >
        Trader Tracks
      </Text>
      <View>
        <Text>Email</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(email) => setEmail(email)} 
        />

        <Text>Password</Text>
        <TextInput 
          style={styles.inputStyle} 
          password={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity onPress={() => loginWithEmail()}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
        <Text>{process.env.API_KEY}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  inputStyle: {
    borderColor: '#000',
    borderWidth: 1,
    width: 200,
    marginTop: 5,
    marginBottom: 20
  }
}

export default Login;