import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 30}}>
        <Text style={styles.text}>Login登陆</Text>
        <Button
          title="登陆"
          onPress={() => {
            navigation.navigate('App');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
