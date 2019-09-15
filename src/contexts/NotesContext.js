import React, { useContext } from "react";

const defaultContextValue = {
  notes: {},
  groups: []
};

const Context = React.createContext(defaultContextValue);
const useNotes = () => useContext(Context)
const NotesConsumer = Context.Consumer;

class NotesProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      notes: {},
      groups: []
    };
  }

  render = () => {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  };
}

export { Context as default, useNotes, NotesProvider, NotesConsumer };
