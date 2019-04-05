/* Udacity Note:
  Para manusear a base de dados AsyncStorage, você certamente irá querer criar quatro métodos auxiliares diferentes:
  - getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas. 
  - getDeck: dado um único argumento id, ele retorna o baralho associado àquele id. 
  - saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos. 
  - addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à
    lista de perguntas ao baralho com o título associado
*/

import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'FLASHCARD_STORAGE_KEY'

const defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is a UI JavaScript Library?',
        answer: 'Yes, React use functions to return UI',
        correctAnswer: true
      },
      {
        question: 'React.js was developed by Google',
        answer: 'Yes, the google keeps this library!',
        correctAnswer: false
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'Redux management the application state?',
        answer: 'Yes, he does it.',
        correctAnswer: true
      },
      {
        question: 'Redux does not allow asynchronous requests?',
        answer: 'Yes, does not allow this.',
        correctAnswer: false
      }
    ]
  },
  Udacity: {
    title: 'Udacity',
    questions: [
      {
        question: 'Udacity is the best place to learn React-native?',
        answer: 'Yes',
        correctAnswer: true
      },
    ]
  }
}

export function getInitialData () {
  return defaultData
}

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(results => {
      if (results === null) {
        AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(defaultData))
        return defaultData
      } else {
        return JSON.parse(results)
      }
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}