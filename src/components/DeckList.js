import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { getInitialData } from '../utils/api'
import { indigo1, white } from '../utils/colors'

class DeckList extends React.Component {
  render() {
    const decks = getInitialData()

      return (
      <View style={styles.container}>
        {Object.keys(decks).map(deckId => {
          const { title, questions  } = decks[deckId]
          return (
            <View style={styles.deckItem} key={deckId}>
              <Text style={styles.deckTitle}>{title}</Text>
              <Text>{questions.length} Questions</Text>

              <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
                'DeckPage',
                { entryId: deckId }
              )}>
                <Text style={styles.btnText}>Open Deck</Text>
              </TouchableOpacity>
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
  },
  //TouchableOpacityStyle
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

export default DeckList