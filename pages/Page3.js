import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default class Page3 extends React.Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>来到Page3</Text>
        <Text style={styles.showText}>{showText}</Text>
        <Button
          title="返回"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setParams({name: text}); //改变导航栏的name
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
  showText: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'black',
  },
});
