import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Panel } from "./index.css"
import { useDarkMode } from "../../contexts/DarkModeContext"

const MainPanel = ({ className, children, bgColor }) => {
  return (
    <Wrapper>
      <Panel className={className} bgColor={bgColor}>
        {children}
      </Panel>
    </Wrapper>
  )
}

MainPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  bgColor: PropTypes.string.isRequired
}


const MainPanelContainer = ({ ...props }) => {
  const { theme } = useDarkMode()
  return (
    <MainPanel
      bgColor={theme.MAIN_PANEL}
      {...props}
    />
  )
}


export default MainPanelContainer
