import { For } from "solid-js";
import { secretWord } from "../../stores/secretWord";

export default function WrongLetters() {
  return (
    <div class="">
      <For each={secretWord.wrongLetters}>
        {
          (item) => <span>{item}</span>
        }
      </For>
    </div>
  )
}