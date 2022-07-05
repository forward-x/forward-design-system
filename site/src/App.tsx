import React from 'react';

import { Avatar, Button } from '@forward-protocol/uikit';

// import logo from './logo.svg';
// import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>hi</Button>
        <Avatar variant="default" size="XL" />;
      </header>
    </div>
  );
};

export default App;
