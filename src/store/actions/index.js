export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'

import { getDecks } from '../../utils/api'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

// export async function handleReceiveDecks (){
//   try {
//     await getDecks()
//   } catch (error) {
    
//   } 
// }

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}