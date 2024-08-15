// import { useState } from "react"
import "./App.css"

function App() {
  // const [bgColor, setBgColor] = useState("white")
  const bgColors = {
    bgViolet: "Violet",
    bgBlue: "bg-blue-300",
    bgYellow: "yellow",
  }

  function bgChanger(color) {
    const root = document.documentElement
    let newBg = color.target.innerHTML

    switch (newBg) {
      case "Violet":
        root.style.setProperty("--background-color", bgColors.bgViolet)
        break
      case "Blue":
        root.style.setProperty("--background-color", bgColors.bgBlue)
        break
      case "Yellow":
        root.style.setProperty("--background-color", bgColors.bgYellow)
        break
    }
  }

  return (
    <>
      <header className={`bg-white text-2xl top-full rounded-2xl`}>
        <button className="bg-indigo-300 mx-2" onClick={bgChanger}>
          Violet
        </button>
        <button className="bg-blue-300 mx-2" onClick={bgChanger}>
          Blue
        </button>
        <button className="bg-yellow-300 mx-2" onClick={bgChanger}>
          Yellow
        </button>
      </header>
    </>
  )
}

export default App
