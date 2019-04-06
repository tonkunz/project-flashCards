import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getInitialData } from '../utils/api'

export default class DeckPage extends React.Component {
  render () {
    const deck = this.props.navigation.state.params.deckId
    const decks = getInitialData()

    console.log('deckId: ',deck)
    return (
      <View style={Styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length}</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})