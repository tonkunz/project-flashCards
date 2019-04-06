import {
  ADD_DECK,
  RECEIVE_DECKS,
  ADD_CARD
} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      const newDeck = {
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
      return {
        ...state,
        ...newDeck
      }
    case ADD_CARD:
      const { deck, answer, correctAnswer, question } = action.card
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [
            ...state[deck].questions,
              {question, answer, correctAnswer}
          ]
        }
      }
    default:
      return state
  }
}

export default decks