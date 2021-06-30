import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from '../Redux';
import {MainStack} from '../Navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
