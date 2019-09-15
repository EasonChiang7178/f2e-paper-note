import React from "react"
import PropTypes from "prop-types"
import { useDarkMode } from "../../../contexts/DarkModeContext"

import { Wrapper, Header, TrashIcon, Button } from "./index.css"

const OnBoardingMessage = ({ className, onCreateNoteBtnClick, bgColor, textColor, isDarkMode }) => {
  return (
    <Wrapper className={className}>
      <Header bgColor={bgColor} textColor={textColor}>Let's Find a Paper!</Header>
      <TrashIcon darkMode={isDarkMode} />

      <Button bgColor={textColor} textColor={bgColor} onClick={onCreateNoteBtnClick} />
    </Wrapper>
  )
}

OnBoardingMessage.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  isDarkMode: PropTypes.bool,
  onCreateNoteBtnClick: PropTypes.func
}


const OnBoardingMessageContainer = ({ ...props }) => {
  const { theme, isDarkMode } = useDarkMode()
  return (
    <OnBoardingMessage
      bgColor={theme.INPUT}
      textColor={theme.TEXT}
      isDarkMode={isDarkMode}
      {...props}
    />
  )
}


export default OnBoardingMessageContainer
