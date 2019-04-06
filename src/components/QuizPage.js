import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, indigo2, red, green } from '../utils/colors'
import TextButton from './TextButton'
import ShowAnswer from './ShowAnswer' //its info.js
import { connect } from 'react-redux'

class QuizPage extends React.Component {
  state = {
    questionIndex: 0,
  }

  render () {
    const { questions, deckId } = this.props
    const { questionIndex } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>{deckId} questions {questionIndex+1}/{questions.length}</Text>
          <View>
            <Text style={styles.answer}>{questions[questionIndex].question}</Text>
            <ShowAnswer
              style={styles.answer}
              value={'Show Answer'}
              onClick={() => alert('Show Answer')}
            />
            <TextButton
              style={{margin: 5, backgroundColor: green}}
              value='Correct'
              onPress={()=>alert('Pressed Correct')}
            />
            <TextButton
              style={{margin: 5, backgroundColor: red}}
              value='Incorrect'
              onPress={()=>alert('Pressed Incorrect')}
            />
          </View>
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
  questions: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
    fontSize: 13,
    color: white,
  },
  answer: {
    fontSize: 20,
    color: white,
    margin: 25,
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
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
  cardText: {
    fontSize: 30,
    color: white,
    marginTop: 35,
    textAlign: 'center',

  }
})

function mapStateToProps (decks, { navigation }) {
  return {
    questions: decks[navigation.state.params.deckId].questions,
    deckId: navigation.state.params.deckId
  }
}

export default connect(mapStateToProps)(QuizPage)