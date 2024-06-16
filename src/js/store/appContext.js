import React, { createContext, useState } from 'react';

export const Context = createContext(null);

const injectContext = PassedComponent => {
  const AppContextProvider = props => {
    const [state, setState] = useState({
      // Estado inicial aquí
    });

    return (
      <Context.Provider value={{ state, setState }}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return AppContextProvider;
};

export default injectContext;
