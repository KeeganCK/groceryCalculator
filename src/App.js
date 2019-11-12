import React, {useState} from 'react';
import './App.css';
import HookPerson from './Components/Person';
const App = props => {

  return (
      <div className="App">
            <h1>Grocery Calculator</h1>
            <p className = "rowC">
                <HookPerson name={"Keegan"} />
                <HookPerson name={"Milena"} />
                <HookPerson name={"Miller"} />
            </p>
      </div>
  );
}

export default App;
