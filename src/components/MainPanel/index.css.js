import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 70px 120px;
  height: 100vh;
  min-height: 821px;
  box-sizing: border-box;
  display: inline-block;
`

export const Panel = styled.main`
  padding: 30px 40px;
  width: calc(100vw - 240px);
  min-width: 1200px;
  height: 100%;
  background: ${props => props.bgColor};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px #00000029;
`
