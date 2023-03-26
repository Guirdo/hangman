import { createSignal } from "solid-js"
import { setNewSecretWord } from "../stores/secretWord"
import { useNavigate } from "@solidjs/router"

export default function GameSettings () {
  const [word, setWord] = createSignal('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setNewSecretWord(word())

    navigate('/playground', { replace: true })
  }
  return(
    <form
      class="[ flex-column ] [ gap-sm p-sm ]"
      onSubmit={handleSubmit}
    >
        <div class="[ flex-column ] [ gap-xs ]">
            <label for="secretWord">
              Enter the secret word: 
            </label>
            <input
              type="text"
              id="secretWord"
              onInput={(e) => setWord(e.target.value)}
            />
        </div>
        
        <button
          class="button"
          type="submit"
          data-type="success"
        >
          Confirm
        </button>
    </form>
  )
}