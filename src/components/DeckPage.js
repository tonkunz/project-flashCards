import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { white, indigo3, green } from '../utils/colors'

class DeckPage extends React.Component {

  handleNavigateToCardPage = (title) => (
    this.props.navigation.navigate('AddCard', {
      deckId: title
    }))

  handleNavigateToQuizPage = (title) => (
    this.props.navigation.navigate('QuizPage', {
      deckId: title
    }))

  render () {
    const { deck } = this.props

    // console.log('The props of DeckPage Component:')
    // console.log(this.props)

    return (
      <View style={Styles.container}>
        <Text>{deck.title}</Text>
        <Text>Questions: {deck.questions.length}</Text>

        <TextButton
          style={{margin: 5, backgroundColor: indigo3}}
          value='Add New Card'
          onPress={()=>this.handleNavigateToCardPage(deck.title)}
        />
        <TextButton
          style={{margin: 5, backgroundColor: green}}
          value='Start Quiz!'
          onPress={()=>this.handleNavigateToQuizPage(deck.title)}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

function mapStateToProps (decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(DeckPage)