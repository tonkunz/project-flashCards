import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { getInitialData } from '../utils/api'

class DeckList extends React.Component {

  render() {
    const decks = getInitialData()

    // Todo: Render individual Item in a individual component
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deckId => {
          const { title, questions  } = decks[deckId]
          return (
            <View style={styles.deckItem} key={deckId}>
              <Text style={styles.deckTitle}>{title}</Text>
              <Text>{questions.length} Questions</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  deckCard: {
    fontSize: 20,
    padding: 30,
    marginTop: 30,
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 35,
    color: '#3F51B5',
  }
})

export default DeckList