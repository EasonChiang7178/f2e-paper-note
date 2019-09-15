import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Input,
  SearchIcon
} from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const SearchBar = ({ className, bgColor, textColor, placeholderColor, iconColor, onChange }) => {
  return (
    <Wrapper className={className} bgColor={bgColor}>
      <Input
        placeholder="Search"
        textColor={textColor}
        placeholderColor={placeholderColor}
        onChange={onChange}
      />

      <SearchIcon color={iconColor} />
    </Wrapper>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  iconColor: PropTypes.string,
  onChange: PropTypes.func
};


const SearchBarContainer = ({ ...props }) => {
  const { isDarkMode, theme } = useDarkMode()

  return (
    <SearchBar
      bgColor={theme.INPUT}
      textColor={theme.TEXT}
      placeholderColor={theme.PLACEHOLDER}
      iconColor={isDarkMode ? theme.TEXT : theme.INPUT}
      {...props}
    />
  )
}


export default SearchBarContainer;
