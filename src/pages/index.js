import React from "react"

import SEO from "../layouts/SEO"
import MainPanel from "../components/MainPanel"
import ToolBar from "../components/ToolBar"

const IndexPage = () => {
  return (
    <>
      <SEO title="Paper Notes" />

      <MainPanel>
        <ToolBar />
      </MainPanel>
    </>
  )
}

export default IndexPage
