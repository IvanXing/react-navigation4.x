import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

export default class Page4 extends React.Component {
  // navigation.openDrawer();
  // navigation.closeDrawer();
  // navigation.toggleDrawer();
  // //或
  // navigation.dispatch(DrawerActions.openDrawer());
  // navigation.dispatch(DrawerActions.closeDrawer());
  // navigation.dispatch(DrawerActions.toggleDrawer());
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>来到Page4</Text>
        <Button
          title="打开抽屉"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Button
          title="切换"
          onPress={() => {
            navigation.toggleDrawer();
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
