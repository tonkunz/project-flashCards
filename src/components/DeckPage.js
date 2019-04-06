import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { white, indigo2, pink, green } from '../utils/colors'

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
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckSubTitle}>Questions: {deck.questions.length}</Text>

          <TextButton
            style={{margin: 5, backgroundColor: pink}}
            value='Add New Card'
            onPress={()=>this.handleNavigateToCardPage(deck.title)}
          />
          <TextButton
            style={{margin: 5, backgroundColor: green}}
            value='Start Quiz!'
            onPress={()=>this.handleNavigateToQuizPage(deck.title)}
          />          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    padding: 20
  },
  deck: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: indigo2,
    padding: 10,
    borderRadius: 5,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'rgba(0,0,0,0.40)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  deckTitle: {
    fontSize: 60,
    color: white,
    marginBottom: 5,
  },
  deckSubTitle: {
    fontSize: 28,
    color: white,
    marginBottom: 20,
  },
})

function mapStateToProps (decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(DeckPage)