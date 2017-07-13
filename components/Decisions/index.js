import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

class Decisions extends Component {
  render () {
    const { width } = Dimensions.get('screen')
    console.log('width', typeof width, width)
    return (
      <View style={ styles.container }>
        <View style={ styles.card }>
          <View style={ styles.content }>
            <View style={ styles.image }>
              <Image
                source={ require('../../assets/college.jpg') }
                style={{
                  width: 414,
                  height: 120,
                }}
              />
            </View>
            <View style={ styles.textBox }>
              <Text style={ styles.text }>
                Put your daughter through college?
              </Text>
            </View>
          </View>
          <View style={ styles.buttons }>
            <View style={ styles.noButton }>
              <MaterialIcons size={ 50 } color={ '#fff' } name='close' />
            </View>
            <View style={ styles.yesButton }>
              <MaterialIcons size={ 50 } color={ '#fff' } name='check' />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

Decisions.propTypes = {

}

export default Decisions

const buttonStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 75,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: '#ddd',
  },
  card: {
    margin: 20,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.23,
    shadowRadius: 10,
  },
  content: {

  },
  image: {
    overflow: 'hidden',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textBox: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: -1 },
  },
  noButton: {
    ...buttonStyle,
    backgroundColor: '#B71C1C',
    borderBottomLeftRadius: 10,
  },
  yesButton: {
    ...buttonStyle,
    backgroundColor: '#8BC34A',
    borderBottomRightRadius: 10,
  },
})
