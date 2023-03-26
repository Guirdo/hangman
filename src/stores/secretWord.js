import { createLocalStore } from "../utils/createLocalStore"

const initialState = {
  rightLetters: [],
  wrongLetters: []
}

export const [secretWord, setSecretWord] = createLocalStore('game',initialState)

export const setNewSecretWord = (word) => {
  const letters = word.toUpperCase().split('').map((char) => ({
    letter: char,
    found: char === ' ' ? true : false
  }))

  setSecretWord("rightLetters",letters)
  setSecretWord("wrongLetters",initialState.wrongLetters)
}

const setRightLetter = (letter) => {
  setSecretWord(
    "rightLetters",
    entry => entry.letter === letter,
    entry => ({...entry, found: true})
  )
}

const setWrongLetter = (letter) => {
  setSecretWord(
    "wrongLetters",
    entry => [...entry, letter]
  )
}

export const checkLetter = (letter) => {
  if ( secretWord.rightLetters.find((e) => e.letter === letter) ){
    setRightLetter(letter)
  } else {
    setWrongLetter(letter)
  }
}

export const resetGame = () => {
  setSecretWord(initialState)
}
