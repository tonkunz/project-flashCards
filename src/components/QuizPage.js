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
    showAnswer: false,
    correct: 0,
    incorrect: 0
  }

  handleSubmit = (answer) => {
    const { questionIndex } = this.state
    const { questions } = this.props
    const correct = questions[questionIndex].correctAnswer

    if (answer === correct) {
      this.setState(current => ({
        correct: current.correct+1
      }))
    } else {
      this.setState(current => ({
        incorrect: current.incorrect+1
      }))
    }

    this.setState(current => ({
      questionIndex: current.questionIndex+1,
      showAnswer: false,
    }))
  }

  handleReplay = () => (
    this.setState({
      questionIndex: 0,
      showAnswer: false,
      correct: 0,
      incorrect: 0
    })
  )

  handleGoToDeck = () => (
    this.props.navigation.dispatch(NavigationActions.back({
      key: null,
    }))
  )

  render () {
    const { questions, deckId } = this.props
    const { questionIndex, showAnswer, correct, incorrect } = this.state

    if (questions.length === questionIndex) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            {correct > incorrect
              ? <Text style={{fontSize: 75}}>:smile:</Text>
              : <Text style={{fontSize: 75}}>:cryEmoji:</Text>
            }
            <Text style={[styles.answer, {fontSize: 25}]}>You got {correct} out of {questions.length}!</Text>
            <TextButton
              value={'Once more'}
              style={{margin: 5, backgroundColor: green}}
              onPress={this.handleReplay}
            />
            <TextButton
              value={'Other decks!'}
              style={{margin: 5, backgroundColor: red}}
              onPress={this.handleGoToDeck}
            />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>{deckId} questions {questionIndex+1}/{questions.length}</Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {showAnswer
              ? <Text style={styles.answer}>{questions[questionIndex].answer}</Text>
              : <Text style={styles.answer}>{questions[questionIndex].question}</Text>
            }
            
            <Text></Text>
            <ShowAnswer
              style={styles.answer}
              value={showAnswer ? 'Hide Answer' : 'Show Answer'}
              onClick={() => this.setState((current)=>({showAnswer: !current.showAnswer}))}
            />
            <TextButton
              style={{margin: 5, backgroundColor: green}}
              value='Correct'
              onPress={()=>this.handleSubmit('true')}
            />
            <TextButton
              style={{margin: 5, backgroundColor: red}}
              value='Incorrect'
              onPress={()=>this.handleSubmit('false')}
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
  questions: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
    fontSize: 20,
    color: white,
  },
  answer: {
    fontSize: 40,
    color: white,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 30,
    color: white,
    marginTop: 35,
    textAlign: 'center',
  },
})

function mapStateToProps (decks, { navigation }) {
  return {
    questions: decks[navigation.state.params.deckId].questions,
    deckId: navigation.state.params.deckId
  }
}

export default connect(mapStateToProps)(QuizPage)