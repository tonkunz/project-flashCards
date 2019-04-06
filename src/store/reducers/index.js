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
      const { title, answer, correctAnswer, question } = action.card

      // console.log('DEBBUG HERE: ')
      // console.log('Card value on reducer: ', action.card)
      // console.log('Key Value on ADD_CARD Reducer: ', title)

      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, { question, answer, correctAnswer }]
        }
      }
    default:
      return state
  }
}

export default decks