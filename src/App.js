import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './navigator';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
