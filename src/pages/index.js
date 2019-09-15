import React from "react"
import { useDarkMode } from "../contexts/DarkModeContext"

const IndexPage = () => {
  const darkMode = useDarkMode()

  return (
    <div onClick={darkMode.toggle}>
      hello, world
    </div>
  )
}

export default IndexPage
