import { useCallback, useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [isNumed, setIsNumed] = useState(false)
  const [isSpecialChar, setIsSpecialChar] = useState(false)

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumed) str += "0123456789"
    if (isSpecialChar) str += "!@#$%^&*-_=+[]{}`~"

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, isNumed, isSpecialChar, setPassword])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length+1)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumed, isSpecialChar])

  return (
    <>
      <h2>Password Generator</h2>
      <div>
        <input
          type="text"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button onClick={copyToClipBoard}>Copy</button>
      </div>
      <div className="inputDiv">
        <input
          type="range"
          style={{cursor:"pointer"}}
          min={6}
          max={16}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length {length}</label>
        <input type="checkbox" onChange={() => setIsNumed((prev) => !prev)} />
        <label> Numeric</label>
        <input
          type="checkbox"
          onChange={() => setIsSpecialChar((prev) => !prev)}
        />
        <label> Special Char</label>
      </div>
    </>
  )
}

export default App
