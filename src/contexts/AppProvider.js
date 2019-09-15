import React from "react";
import PropTypes from "prop-types";

import { DarkModeProvider } from "./DarkModeContext";
// import { useItemData } from "../hooks/useItemData";

const AppProvider = ({ children }) => {
  // const items = useItemData();

  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
