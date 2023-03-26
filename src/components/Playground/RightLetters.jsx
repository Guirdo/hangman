import { For } from "solid-js";
import { secretWord } from "../../stores/secretWord";

export default function RightLetters() {
  return (
    <div class="flex-row gap-xs">
      <For each={secretWord.rightLetters}>
        {(item) => <span>{ item.found ? item.letter : '__' }</span>}
      </For>
    </div>
  )
}