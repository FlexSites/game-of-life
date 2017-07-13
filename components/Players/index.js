import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const SLIDE_WIDTH = 160

const dadImage = require('../../assets/profiles/dad.jpg')
const uncleImage = require('../../assets/profiles/uncle.jpg')
const grandmaImage = require('../../assets/profiles/grandma.jpg')

const images = {
  dad: dadImage,
  uncle: uncleImage,
  grandma: grandmaImage,
}

export default class Footer extends React.Component {
  // Example with different children
  render () {
    const { width } = Dimensions.get('screen')
    return (
      <View style={{ width, height: SLIDE_WIDTH }}>
        <Carousel
          ref={(carousel) => { this._carousel = carousel }}
          sliderWidth={ width }
          sliderHeight={ SLIDE_WIDTH }
          itemWidth={ SLIDE_WIDTH }
          itemHeight={ SLIDE_WIDTH }
          style={ { height: 160 } }
        >
          <Player player='dad' />
          <Player player='grandma' />
          <Player player='uncle' />
          <Player player='dad' />
          <Player player='grandma' />
          <Player player='uncle' />
          <Player player='dad' />
          <Player player='grandma' />
          <Player player='uncle' />
        </Carousel>
      </View>
    )
  }
}

function Player ({ player = 'uncle' }) {
  return (
    <View style={ styles.slide }>
      <Image source={ images[player] } style={ styles.image } />
      <View style={ styles.progressBar }>
        <View style={ styles.progressFill } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    width: SLIDE_WIDTH,
    height: SLIDE_WIDTH,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: SLIDE_WIDTH - 20,
    height: SLIDE_WIDTH - 50,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 10,
  },
  progressFill: {
    backgroundColor: '#AED581',
    borderRadius: 10,
    width: 100,
    height: 20,
  },
})
