import { Dimensions, Navigator, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import AppSummary from '../compoents/MiniAppCell'
import { connect } from 'react-redux'
import { fetchDetail , fetchAppList} from '../api'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    flex: 1,
  },
  introTitle: {
    padding: 10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'stretch'
  },
  image: {
    width,
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'white',
  }
})

class DetailPage extends Component {
  constructor() {
    super()
    this.state = { detail: {} };
  }

  componentWillMount() {
    fetchDetail().then( result => {
      this.setState({ detail: result })
      console.log(this.state)
    })
  }

  render() {
    const { app, action } = this.props;
    const { detail } = this.state;
    const appDetail = Object.assign({}, detail.data);

    var intro = ""
    var images = []

    if (isEmpty(appDetail) == false) {
      intro = appDetail.intro
      images = appDetail.images
    }

    return (
      <ScrollView style={styles.container}>
        <AppSummary app={app}/>
        <Text style={styles.introTitle}> {intro} </Text>
  
        <Swiper style={styles.wrapper}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          paginationStyle={{
            bottom: 0, left: null, right: 10
          }} loop>
          {
             images.map((imageLink, index) => {
                return (<View style={styles.slide} key={index}>
                        <Image style={styles.image} source={{ uri: imageLink }} />
                      </View>)
            })
          }
        </Swiper>

      </ScrollView>
    )
  }
}

DetailPage.propTypes = {
  app: React.PropTypes.object.isRequired
}

export default DetailPage
