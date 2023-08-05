const steps = [
  hangman.drawLine,
  hangman.drawHead,
  hangman.drawBody,
]

export default function drawInCanvas (index) {
  steps[index]()
}

