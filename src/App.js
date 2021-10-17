import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import './styles/global.css';

const App = () => {
  return (
    <div className="App">
      <Header />      
      <main>
        <Headline 
          header='Posts' 
          desc='Click the button to render posts' 
        />
      </main>
    </div>
  );
}

export default App;
