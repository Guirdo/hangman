import { createEffect } from "solid-js";

const canvas = document.querySelector('#canvas');
console.log(canvas)
const ctx = canvas.getContext("2d");

const hangman = new Hangman(ctx)

export default function Canvas() {

  createEffect(() => {
    drawInCanvas(secretWord.wrongLetters.length)
  })

  return (
    <canvas
      class="canvas"
      id="canvas"
      height="450"
      width="600"
      style="border: 1px solid black"
    >
    </canvas>
  )
}