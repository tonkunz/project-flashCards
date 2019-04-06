import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../store/actions/'
import {red, green, white, indigo1, indigo2, indigo3 } from '../utils/colors'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
    correctAnswer: '',
  }

  handleSubmit = () => {
    const { dispatch } = this.props
    const { question, answer, correctAnswer } = this.state
    const { title } = this.props.deck

    if (question && answer) {
      dispatch(addCard({ title, question, answer, correctAnswer}))
      addCardToDeck(title, { question, answer, correctAnswer })
      this.setState({
        question: '',
        answer: '',
        correctAnswer: '',
      })

      // todo: go To DeckPage
      this.props.navigation.dispatch(NavigationActions.back({
        key: null
      }))
    } else {
      alert('You have empty fields!')
    }
  }

  render () {
    
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Insert the question: </Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({question})}
            value={this.state.question}
          />

          <Text style={styles.text}>Insert the propose answer: </Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({answer})}
            value={this.state.answer}
          />

          <Text style={styles.text}>Answer is true or false?</Text>
          <TextInput
            style={styles.input}
            onChangeText={correctAnswer => this.setState({correctAnswer})}
            value={this.state.correctAnswer}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.handleSubmit()}
          >
            <Text style={styles.btnText}>Submit a new Card!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: indigo3,
  },
  btn: {
    backgroundColor: indigo1,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    fontSize: 22,
    color: white,
    textAlign: 'center'
  },
  input: {
    width: 200,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: indigo3,
    margin: 10,
    borderRadius: 5
  },
})

function mapStateToProps (decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(AddCard)