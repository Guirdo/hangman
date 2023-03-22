import { setSecretWord } from "../stores/secretWord"

export default function GameSettings () {
  return(
    <form class="[ flex-column ] [ gap-sm p-sm ]">
        <div class="[ flex-column ] [ gap-xs ]">
            <label for="secretWord">
              Enter the secret word: 
            </label>
            <input
              type="text"
              id="secretWord"
              onInput={(e) => setSecretWord(e.target.value)}
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