import React from "react"
import PropTypes from "prop-types"

import {
  Wrapper,
  Logo,
  SearchBar,
  CreateNoteButton,
  CreateGroupButton,
  DarkModeToggleButton
} from "./index.css"

const ToolBar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo />
      <SearchBar />

      <CreateNoteButton />
      <CreateGroupButton />
      <DarkModeToggleButton />
    </Wrapper>
  )
}

ToolBar.propTypes = {
  className: PropTypes.string
}

export default ToolBar
