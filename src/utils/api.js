/* Udacity Note:
  Para manusear a base de dados AsyncStorage, você certamente irá querer criar quatro métodos auxiliares diferentes:
  - getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas. 
  - getDeck: dado um único argumento id, ele retorna o baralho associado àquele id. 
  - saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos. 
  - addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à
    lista de perguntas ao baralho com o título associado
*/
import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Flashcards:data'

const defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is a UI JavaScript Library?',
        answer: 'Yes, React use functions to return UI',
        correctAnswer: 'true'
      },
      {
        question: 'React.js was developed by Google',
        answer: 'Yes, the google keeps this library!',
        correctAnswer: 'false'
      },
      {
        question: 'React.js can use JSX',
        answer: 'Yes, react support this lib',
        correctAnswer: 'true'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'Redux management the application state?',
        answer: 'Yes, he does it.',
        correctAnswer: 'true'
      },
      {
        question: 'Redux does not allow asynchronous requests?',
        answer: 'Yes, does not allow this.',
        correctAnswer: 'false'
      }
    ]
  },
  Udacity: {
    title: 'Udacity',
    questions: [
      {
        question: 'Udacity is the best place to learn React-native?',
        answer: 'Yes',
        correctAnswer: 'true'
      },
    ]
  }
}

export function getInitialData () {
  return defaultData
}

export function getDecks (deck) {
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
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(data => {
      data[title].questions.push(card)
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
        return data
    })
}

// Remove all data, just for tests
export function removeAllData (){
  AsyncStorage.clear(FLASHCARD_STORAGE_KEY, (err) => {
    console.log('Error on delete', err)
  })

  // export async function clearStorage() {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}