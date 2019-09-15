import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(({ bgColor, ...rest }) => <Link {...rest} />)`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 21px;
  font-weight: 700;
  font-style: oblique;
  text-decoration: none;
  background: ${props => props.bgColor};
`

export const LogoText = styled.div.attrs({
  children: 'N'
})`
  position: relative;
  right: 2px;
  font-size: 21px;
  font-weight: 700;
  font-style: oblique;
  text-decoration: none !important;
  color: ${props => props.color} !important;
`
