import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { indigo1, white } from '../utils/colors'
import { getDecks, removeAllData } from '../utils/api'
import { receiveDecks } from '../store/actions'


class DeckList extends React.Component {
  
  componentDidMount () {
    getDecks()
      .then(decks => this.props.receiveAllDecks(decks))
      .catch(e => console.log('error on didmount: ',e))
  }

  // Just for tests
  resetAll = () => {
    alert('You reset all')
    removeAllData()
  }

  render() {
    const { decks } = this.props
    // console.log(this.props)
    return (
      <View style={styles.container}>
        {decks && Object.keys(decks).map(deckId => {
          const { title, questions  } = decks[deckId]
          return (
            <View style={styles.deckItem} key={deckId}>
              <Text style={styles.deckTitle}>{title}</Text>
              <Text>{questions.length} Questions</Text>

              <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate(
                'DeckPage',
                { deckId: deckId }
              )}>
                <Text style={styles.btnText}>Open Deck</Text>
              </TouchableOpacity>
            </View>
          )
        })}

        {/* Dead Button just for tests */}
        <Button style={styles.deadBtn} title='reset all data' onPress={()=>this.resetAll()}/>

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
  },
})

function mapDispatchToProps (dispatch) {
  return {
    receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)