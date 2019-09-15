import styled from "styled-components"

import LogoRaw from "./Logo"
import SearchBarRaw from "./SearchBar"
import CreateNoteButtonRaw from "./CreateNoteButton"
import CreateGroupButtonRaw from "./CreateGroupButton"
import DarkModeToggleButtonRaw from "./DarkModeToggleButton"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(LogoRaw)``

export const SearchBar = styled(SearchBarRaw)`
  margin-left: 30px;
`

export const CreateNoteButton = styled(CreateNoteButtonRaw)`
  margin-left: auto;
`

export const CreateGroupButton = styled(CreateGroupButtonRaw)`
  margin-left: 30px;
`

export const DarkModeToggleButton = styled(DarkModeToggleButtonRaw)`
  margin-left: 30px;
`
