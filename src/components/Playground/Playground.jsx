import { resetGame } from "../../stores/secretWord";
import Canvas from "./Canvas";
import EnterLetter from "./EnterLetter";
import RightLetters from "./RightLetters";
import WrongLetters from "./WrongLetters";

export default function Playground () {
  return(
    <div class="flex-column gap-md p-xs">
      <Canvas />
      <RightLetters />

      <EnterLetter />
      <WrongLetters />
    </div>
  )
}