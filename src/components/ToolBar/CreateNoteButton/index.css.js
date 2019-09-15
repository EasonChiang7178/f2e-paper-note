import React from "react"
import styled from "styled-components"
import TrashSvgIcon from "../../../images/icons/trash.inline.svg"

export const Button = styled.button`
  border: none;
  padding: 11px 36px 11px 27px;
  width: 155px;
  height: 44px;
  border-radius: 21px;
  font-size: 15px;
  line-height: 17px;
  font-family: "Fira Sans";
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: ${props => props.bgColor};

  &:focus, &:active {
    outline: none;
  }
`

export const TrashIcon = styled(TrashSvgIcon)`
  position: relative;
  bottom: 3px;

  path:first-of-type {
    fill: ${props => props.color};
  }
  path:last-of-type {
    fill: ${props => props.color};
  }
`

export const Text = styled.span.attrs({
  children: (<>＋ <i>note</i></>)
})`
  color: ${props => props.color};
`
