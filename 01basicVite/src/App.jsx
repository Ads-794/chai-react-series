import { useState } from "react"
import "./App.css"

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Working with Vite + React</h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={subValue}>Sub Value</button>
    </>
  )
}

export default App
