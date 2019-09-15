import React from "react"

import SEO from "../layouts/SEO"
import MainPanel from "../components/MainPanel"

import { useDarkMode } from "../contexts/DarkModeContext"

const IndexPage = () => {
  const darkMode = useDarkMode()

  return (
    <>
      <SEO title="Paper Notes" />
      <MainPanel>
        <div onClick={darkMode.toggle}>
          hello, world
        </div>
      </MainPanel>
    </>
  )
}

export default IndexPage
