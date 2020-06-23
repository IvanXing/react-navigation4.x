import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'; // 堆栈导航
import {
  createBottomTabNavigator, // 底部导航
  createMaterialTopTabNavigator, //顶部导航器
} from 'react-navigation-tabs';
import {Button, Text} from 'react-native';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SwitchNavigator from './SwitchNavigator';

// 抽屉导航
const DrawerNav = createDrawerNavigator({
  Page4: {
    screen: Page4,
    navigationOptions: {
      drawerLabel: 'Page4',
      drawerIcon: ({tintColor, focused}) => (
        <MaterialIcons name="drafts" size={24} color={{color: tintColor}} />
      ),
    },
  },
  Page5: {
    screen: Page5,
    navigationOptions: {
      drawerLabel: 'Page5',
      drawerIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          color={{color: tintColor}}
        />
      ),
    },
  },
});

// 顶部导航
const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1', // 接受string或者组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'orange' : 'grey'}}>Page2</Text>
        ),
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: 'Page3',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      tabStyle: {minWidth: 50},
      upperCaseLabel: false, // 是否标签大写，默认为true
      style: {backgroundColor: '#e84e40'},
      indicatorStyle: {height: 1, backgroundColor: 'white'}, //指示器下划线
      labelStyle: {fontSize: 13, marginTop: 6, marginBottom: 6}, // 标签文字样式
    },
  },
);

// 底部导航
const BottomTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: 'Page1', // 接受string或者组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: (
          {tintColor, focused}, // 自定义文字颜色
        ) => <Text style={{color: focused ? 'orange' : 'grey'}}>Page2</Text>,
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name="ios-people"
            size={26}
            style={{color: focused ? 'orange' : 'grey'}} // 自定义图标颜色
          />
        ),
      },
    },
  },
  // bottom设置全局 默认颜色
  {
    tabBarOptions: {
      activeTintColor: 'red',
    },
  },
);

// 所有页面 堆栈导航器
export const AppStackNavigator = createStackNavigator(
  {
    // 普通进入
    // HomePage: {screen: HomePage},

    //底部导航进入
    // HomePage: {
    //   screen: BottomTabNavigator,
    //   navigationOptions: {
    //     title: '底部导航',
    //     headerRight: null,
    //   },
    // },

    // 顶部导航进入
    HomePage: {screen: HomePage},
    DrawerNav: {
      screen: DrawerNav,
    },
    SwitchNav: SwitchNavigator,
    MaterialTopTabNavigator: {
      screen: MaterialTopTabNavigator,
      navigationOptions: {
        title: '顶部导航',
      },
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        title: '底部导航',
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params && navigation.state.params.name}标题`,
      }),
    },
    Page2: {screen: Page2, navigationOptions: {title: 'Page2'}},
    Page3: {
      screen: Page3,
      navigationOptions: props => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params = {}} = state; //默认值，上一页不传param为{}
        return {
          title: params.name ? params.name : 'This is Page3',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  // 全局默认属性，对当前导航器所有页面有效
  {
    defaultNavigationOptions: {
      // header: null,
    },
  },
);

// 页面title三种设置方式
// 1.详情页设置 2.导航中设置 3.跳页传参动态设置
