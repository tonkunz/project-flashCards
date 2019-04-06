import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckPage extends React.Component {
  render () {
    const { deck } = this.props

    console.log('The props of DeckPage Component:')
    console.log(this.props)

    return (
      <View style={Styles.container}>


        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
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

function mapStateToProps (decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(DeckPage)