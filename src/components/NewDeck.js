import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { indigo1, indigo2, indigo3, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../store/actions'

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  onChange = (title) => {
    this.setState({ title })
  }

  onSubmit = () => {
    const { title } = this.state
    alert({ title })
  }

  render () {
    const { title } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <Text style={styles.mainTitle}>NEW DECK</Text>
        </View>
        <Text>{title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={title => this.onChange(title)}
          value={title}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.btn}
          title='Submit a new deck'
          onPress={this.handleSubmit}
        >
          <Text style={styles.btnText}>
            Submit new deck
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
  mainTitle: {
    color: indigo2,
    fontSize: 25,
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: indigo3,
    margin: 10
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
    color: white
  }
})

export default NewDeck