import styled from "styled-components"
import Img from "gatsby-image"

export const FixedScreenWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1000;
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  
  ${props => props.darkMode && {
    opacity: ".2"
  }}
`
