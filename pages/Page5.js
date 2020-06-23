import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Page5 extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>来到Page5</Text>
        <Button
          title="返回"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title="去Page2"
          onPress={() => {
            navigation.navigate('Page2');
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
