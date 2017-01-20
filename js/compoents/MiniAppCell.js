import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 3
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  tagWrapper: {
    flexDirection: 'row',
  },
  name: {
    padding: 5
  },
  tag: {
    margin: 5,
    padding: 3,
    backgroundColor: '#044974',
    borderRadius: 3,
    color: 'white'
  },
  cell: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    alignItems: 'center'
  }
})

class MiniApp extends Component {
  render() {
    const { app } = this.props
    return (
        <View style={styles.cell}>
          <Image
            style={styles.icon}
            source={{ uri: app.icon }}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{app.name}</Text>
            <View style={styles.tagWrapper}>
              {app.tags.map((tag, index) => {
                return <Text style={styles.tag} key={index}>{tag}</Text>
                })
              }
            </View>
          </View>
        </View>
    )
  }
}

MiniApp.propTypes = {
  app: PropTypes.object.isRequired
}

export default MiniApp
