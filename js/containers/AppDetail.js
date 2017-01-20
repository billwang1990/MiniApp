import { Navigator, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import AppSummary from '../compoents/MiniAppCell'
import { connect } from 'react-redux'

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
  }

  componentWillMount() {
    console.log(this.props.app)
  }

  render() {
    const { app, action } = this.props
    return (
      <View style={styles.container}>
        <AppSummary app={app}/>
      </View>
    )
  }
}

DetailPage.propTypes = {
  app: React.PropTypes.object.isRequired
}

export default DetailPage
