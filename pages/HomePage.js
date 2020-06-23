import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class HomePage extends React.Component {
  // navigationOptions设置页面导航属性
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '返回标题', //设置返回此页面的返回按钮文案，有长度限制，且安卓不支持
  };
  // static navigationOptions = {
  //   header: null,
  // };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>来到HomePage</Text>
        <Button
          title="去Page1"
          onPress={() => {
            navigation.navigate('Page1', {name: '动态的'});
          }}
        />
        <Button
          title="去Page2"
          onPress={() => {
            navigation.navigate('Page2');
          }}
        />
        <Button
          title="去Page3"
          onPress={() => {
            navigation.navigate('Page3', {name: 'lampard'});
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
