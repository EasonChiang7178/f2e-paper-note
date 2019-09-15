import React from "react";
import PropTypes from "prop-types";

import { Button, LogoText } from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const Logo = ({ className, bgColor, textColor }) => {
  return (
    <Button className={className} to="/" bgColor={bgColor}>
      <LogoText color={textColor} />
    </Button>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};


const LogoContainer = ({ ...props }) => {
  const { theme } = useDarkMode()
  
  return (
    <Logo bgColor={theme.BUTTON} textColor={theme.TEXT} {...props} />
  )
}


export default LogoContainer;
