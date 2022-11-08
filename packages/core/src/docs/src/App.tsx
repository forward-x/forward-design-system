import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="btn btn-l btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
