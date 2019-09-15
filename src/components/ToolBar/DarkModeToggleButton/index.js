import React from "react";
import PropTypes from "prop-types";

import { Button, MoonIcon, SunIcon } from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const DarkModeToggleButton = ({ className, isDarkMode, bgColor, iconColor, onClick }) => {
  return (
    <Button className={className} to="/" bgColor={bgColor} onClick={onClick}>
      {isDarkMode ? <SunIcon color={iconColor} /> : <MoonIcon color={iconColor} />}
    </Button>
  );
};

DarkModeToggleButton.propTypes = {
  className: PropTypes.string,
  isDarkMode: PropTypes.bool,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  onClick: PropTypes.func
};

const DarkModeToggleButtonContainer = ({ ...props }) => {
  const { isDarkMode, theme, toggle } = useDarkMode();

  return (
    <DarkModeToggleButton
      isDarkMode={isDarkMode}
      bgColor={theme.BUTTON}
      iconColor={theme.TEXT}
      onClick={toggle}
      {...props}
    />
  );
};

export default DarkModeToggleButtonContainer;
