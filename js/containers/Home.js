/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, ListView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Cell from '../compoents/MiniAppCell'
import { fetchMiniAppListAction } from '../actions/FetchAppList'
import { fetchAppDetail } from '../actions/FetchAppDetail'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    flex: 1
  }
})

class Home extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentWillMount() {
    this.props.fetchListAction(0)
  }

  render() {
    const { appList, fetchListAction, fetchDetailAction, navigator } = this.props
    const filteredList = appList
    const ds = this.dataSource.cloneWithRows(filteredList)
    return (
      <View style={styles.container}>
        <ListView
          dataSource={ds}
          renderRow={(a) => (
            <TouchableOpacity
              onPress={() => navigator.push({ Title: 'Detail', param: {app: a}})}
            >
              <Cell app={a} />
            </TouchableOpacity>
            )} enableEmptySections
        />
      </View>
    )
  }
}

function mapStateToProps(s) {
  return {
    appList: s.appList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListAction: (index) => dispatch(fetchMiniAppListAction(index))
  }
}

Home.propTypes = {
  fetchListAction: React.PropTypes.func.isRequired,
  appList: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
