import React from "react";
import PropTypes from "prop-types";

import { Button, FolderIcon, Text } from "./index.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";

const CreateGroupButton = ({ className, bgColor, textColor, onClick }) => {
  return (
    <Button className={className} bgColor={bgColor} onClick={onClick}>
      <FolderIcon color={textColor} />
      <Text color={textColor} />
    </Button>
  );
};

CreateGroupButton.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func
};

const CreateGroupButtonContainer = ({ ...props }) => {
  const { theme } = useDarkMode();

  return (
    <CreateGroupButton
      bgColor={theme.BUTTON}
      textColor={theme.TEXT}
      {...props}
    />
  );
};

export default CreateGroupButtonContainer;
