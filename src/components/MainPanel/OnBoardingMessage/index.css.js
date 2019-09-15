import React from "react"
import styled from "styled-components"

import TrashClosedSvgIcon from "../../../images/icons/trash-closed.inline.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.h3`
  margin: 0;
  margin-bottom: 57px;
  width: 200px;
  height: 50px;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 21px;
  font-family: "Fira Sans";
  font-style: italic;
  font-weight: 400;
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
`

export const TrashIcon = styled(({ darkMode, ...rest }) => <TrashClosedSvgIcon {...rest} />)`
  margin-bottom: 38px;

  path:first-of-type,
  path:last-of-type {
    ${props => props.darkMode && {
      fill: "#8a7144"
    }}
  }
`

export const Button = styled.button.attrs({
  children: (<>＋<i>note</i></>)
})`
  border: none;
  padding: 11px 0;
  width: 155px;
  height: 44px;
  border-radius: 21px;
  font-size: 15px;
  line-height: 17px;
  font-family: "Fira Sans";
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.textColor}
  background: ${props => props.bgColor};

  &:focus, &:active {
    outline: none;
  }

  i {
    margin-left: 8px;
  }
`
