import { Navigator, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import AppSummary from '../compoents/MiniAppCell'
import { connect } from 'react-redux'
import { fetchDetail , fetchAppList} from '../api'

function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    flex: 1,
  }
})

class DetailPage extends Component {
  constructor() {
    super()
    this.state = { detail: {} };
  }

  componentWillMount() {
    fetchDetail().then( result => {
      console.log("取到了")
      this.setState({ detail: result })
      console.log(this.state)
    })
  }

  render() {
    const { app, action } = this.props
    const { detail } = this.state

    const info = Object.assign({}, detail.data);
    var intro = ""
    if (isEmpty(info) == false) {
      intro = info.intro
    }

    return (
      <View style={styles.container}>
        <AppSummary app={app}/>
        <Text> {intro} </Text>
      </View>
    )
  }
}

DetailPage.propTypes = {
  app: React.PropTypes.object.isRequired
}

export default DetailPage
