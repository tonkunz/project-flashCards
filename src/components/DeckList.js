import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { indigo1, indigo2, indigo3, white, yellow } from '../utils/colors'
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
            <View style={styles.deckCard} key={deckId}>
              <Text style={styles.deckTitle}>{title}</Text>
              <Text style={styles.deckSubTitle}>{questions.length} Questions</Text>

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
    justifyContent: 'center'
  },
  deckCard: {
    flex: 1,
    fontSize: 20,
    padding: 30,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    height:300,
    width: 350,
    borderRadius: 3,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowColor: 'rgba(0,0,0,0.40)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: indigo2,
  },
  deckTitle: {
    fontSize: 40,
    color: white,
  },
  deckSubTitle: {
    fontSize: 20,
    color: white,
  },
  btn: {
    backgroundColor: indigo3,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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