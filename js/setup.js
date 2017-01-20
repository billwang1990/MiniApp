import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './containers/Home'
import Detail from './containers/AppDetail'
import { Navigator, StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  scene: {
    paddingTop: 64
  }
})

const routes = [
    {title: 'Home', index: 0},
    {title: 'Detail', index: 1},
];

const routeMapper = {
   LeftButton: (route, navigator, index, navState) =>
                  {
                    if (route.Title == 'Detail') {
                        return (<TouchableOpacity onPress={() => navigator.pop()}>
                          <Text style={{fontSize: 14, padding: 15}}>返回</Text>
                        </TouchableOpacity>);
                    }
                   return null 
                 },
   RightButton: (route, navigator, index, navState) =>
     { return null },
   Title: (route, navigator, index, navState) =>
     {
      if (route.Title == 'Detail') {
        return (<Text style={{fontSize: 18, paddingTop: 10}}> 详情</Text>)
      }
      return (<Text style={{fontSize: 18, paddingTop: 10}}> 首页</Text>)
     },
}

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator initialRoute={routes[0]}
          sceneStyle={styles.scene}
          renderScene={(route, navigator) => {
            switch (route.Title) {
              case 'Detail':
              return <Detail app={route.param.app} action={route.param.action} />
              default:
              return <Home navigator={navigator} />
              }
            }

          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={routeMapper}
               style={{backgroundColor: '#EEEEEE'}}
             />
            }
        />
      </Provider>
    )
  }
}