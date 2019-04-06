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

  handleChange = (e) => (
    this.setState({
      [e.target.id]: e.target.value
    })
  )
  handleSubmit = () => {
    alert('submitou card!')
  }

  render () {
    const deck = this.props.navigation.state.params.deckId

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View >
          <Text style={styles.text}>New Card name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange}
            value={this.state.question}
          />

          <Text style={styles.text}>Question: </Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange}
            value={this.state.answer}
          />

          <Text style={styles.text}>Correct Answer: </Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange}
            value={this.state.correctAnswer}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleSubmit(deck)}
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
    color: indigo3
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

export default AddCard