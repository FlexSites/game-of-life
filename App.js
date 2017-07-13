import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Players from './components/Players'
import Decisions from './components/Decisions'
import FamilyGoal from './components/FamilyGoal'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <FamilyGoal />
        <Decisions />
        <Players />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    height: 300,
  },
})
