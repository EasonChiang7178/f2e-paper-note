import React from "react";
import PropTypes from "prop-types";

import { DarkModeProvider } from "./DarkModeContext";
import { NotesProvider } from "./NotesContext";


const AppProvider = ({ children }) => {
  return (
    <NotesProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </NotesProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
