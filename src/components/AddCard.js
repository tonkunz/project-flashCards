import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../store/actions/'
import {red, green, white, indigo1, indigo3 } from '../utils/colors'

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
  }

  render () {
    const deck = this.props.navigation.state.params.deckId

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View >
          <Text>{deck}</Text>

          <Text style={styles.text}>Insert the question: </Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({question})}
            value={this.state.question}
          />

          <Text style={styles.text}>Insert de propose Answer: </Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({answer})}
            value={this.state.answer}
          />

          <Text style={styles.text}>Insert a Correct Answer (true or false):</Text>
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
    fontSize: 25,
    color: indigo3
  },
  btn: {
    backgroundColor: indigo1,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
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
    width: 150,
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