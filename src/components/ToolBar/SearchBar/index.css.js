import styled from "styled-components"
import SearchSvgIcon from "../../../images/icons/search.inline.svg"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 118px;
  height: 44px;
  background: ${props => props.bgColor};
  border-radius: 22px;
  box-sizing: border-box;
`

export const Input = styled.input`
  padding: 16px 15px 14px 15px;
  width: 52px;
  border: none;
  background: transparent;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.textColor};

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${props => props.placeholderColor};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${props => props.placeholderColor};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${props => props.placeholderColor};
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: ${props => props.placeholderColor};
  }
`

export const SearchIcon = styled(SearchSvgIcon)`
  width: 18px;
  height: auto;
  position: relative;
  top: 1px;

  > path {
    fill: ${props => props.color};
  }
`
