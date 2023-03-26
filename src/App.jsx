import { Route, Routes } from "@solidjs/router"
import GameSettings from "./components/GameSettings"
import Playground from "./components/Playground/Playground"

export default function App () {
  return(
    <div>
      <Routes>
        <Route path="/" element={GameSettings}/>
        <Route path="/playground" element={Playground}/>
      </Routes>
    </div>
  )
}