import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  TrashIcon,
  Text
} from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const CreateNoteButton = ({ className, bgColor, textColor, onClick }) => {
  return (
    <Button className={className} bgColor={bgColor} onClick={onClick}>
      <TrashIcon color={textColor} />
      <Text color={textColor} />
    </Button>
  );
};

CreateNoteButton.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func
};


const CreateNoteButtonContainer = ({ ...props }) => {
  const { theme } = useDarkMode()

  return (
    <CreateNoteButton
      bgColor={theme.BUTTON}
      textColor={theme.TEXT}
      {...props}
    />
  )
}


export default CreateNoteButtonContainer;
