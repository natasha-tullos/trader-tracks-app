import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './client/Login';

const App: () => React$Node = () => {
  return (
    <>
      <View>
        <Login />
      </View>
    </>
  );
};

export default App;
