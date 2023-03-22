import { Route, Routes } from "@solidjs/router"
import GameSettings from "./components/GameSettings"

export default function App () {
  return(
    <div>
      <Routes>
        <Route path="/" element={GameSettings}/>
      </Routes>
    </div>
  )
}