import styled from "styled-components";
import MoonSvgIcon from "../../../images/icons/moon.inline.svg"
import SunSvgIcon from "../../../images/icons/sun.inline.svg"

export const Button = styled.button`
  border: none;
  padding: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  background: ${props => props.bgColor};

  &:focus, &:active {
    outline: none;
  }
`;

export const MoonIcon = styled(MoonSvgIcon)`
  path {
    fill: ${props => props.color};
  }
`;

export const SunIcon = styled(SunSvgIcon)`
  width: 16px;
  height: auto;
  path {
    fill: ${props => props.color};
  }
`;
