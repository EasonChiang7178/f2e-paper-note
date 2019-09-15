import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  TrashIcon,
  Text
} from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const CreateNoteButton = ({ className, bgColor, textColor, isDarkMode, onClick }) => {
  return (
    <Button className={className} bgColor={bgColor} onClick={onClick}>
      <TrashIcon darkMode={isDarkMode} />
      <Text color={textColor} />
    </Button>
  );
};

CreateNoteButton.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  isDarkMode: PropTypes.bool,
  onClick: PropTypes.func
};


const CreateNoteButtonContainer = ({ ...props }) => {
  const { theme, isDarkMode } = useDarkMode()

  return (
    <CreateNoteButton
      bgColor={theme.BUTTON}
      textColor={theme.TEXT}
      isDarkMode={isDarkMode}
      {...props}
    />
  )
}


export default CreateNoteButtonContainer;
