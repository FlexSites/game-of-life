import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

class FamilyGoal extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>GOAL PROGRESS</Text>
        <View style={ styles.progressBar }>
          <View style={ styles.progressFill } />
        </View>
      </View>
    )
  }
}

FamilyGoal.propTypes = {

}

export default FamilyGoal
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 20,
  },
  progressFill: {
    backgroundColor: '#AED581',
    borderRadius: 10,
    width: 100,
    height: 20,
  },
})
