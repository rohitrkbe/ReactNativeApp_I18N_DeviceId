import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './Src/Header'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
