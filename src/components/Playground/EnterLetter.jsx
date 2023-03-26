import { createSignal } from "solid-js"
import { checkLetter } from "../../stores/secretWord"

export default function EnterLetter () {
  const [letter, setLetter] = createSignal('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    checkLetter(letter())
    setLetter('')
  }

  return(
    <form
      class="flex-row flex-wrap align-items-center gap-xs" id="divInput"
      onSubmit={handleSubmit}
    >
        <label for="letter">
          Enter the letter: 
        </label>
        <input
          class="flex-grow-2"
          type="text"
          id="letter"
          value={letter()}
          onInput={(e) => setLetter(e.target.value.toUpperCase())}
        />
        
        <button
          class="button"
          id="btnLetter"
          type="submit"
        >
          Enter
        </button>
    </form>
  )
}