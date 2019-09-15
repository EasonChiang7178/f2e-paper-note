import React from "react"
import styled from "styled-components"

import SEO from "../layouts/SEO"
import MainPanelRaw from "../components/MainPanel"
import ToolBarRaw from "../components/ToolBar"
import OnBoardingMessageRaw from "../components/MainPanel/OnBoardingMessage"

const MainPanel = styled(MainPanelRaw)`
  display: flex;
  flex-direction: column;
`
const ToolBar = styled(ToolBarRaw)``
const OnBoardingMessage = styled(OnBoardingMessageRaw)`
  height: 100%;
`

const IndexPage = () => {
  return (
    <>
      <SEO title="Paper Notes" />

      <MainPanel>
        <ToolBar />
        <OnBoardingMessage />
      </MainPanel>
    </>
  )
}

export default IndexPage
