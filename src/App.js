import React from 'react';
import Main from './components/Main'
import './App.css';
import Bodypage from './components/Bodypage';
import Display  from './components/Display';


function App() {
  return (
    <div className="app">
       <Main />
       <Bodypage />
       <Display />
     
    </div>
  );
}

export default App;
