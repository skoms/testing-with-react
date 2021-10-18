import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import './styles/global.css';

const tempArray = [
  {
    fName: 'Joe',
    lName: 'Mama',
    email: 'joemama@gmail.com',
    age: 420,
    onlineStatus: true
  },
]

const App = () => {
  return (
    <div className="App">
      <Header />      
      <main>
        <Headline 
          header='Posts' 
          desc='Click the button to render posts' 
          tempArray={tempArray}
        />
      </main>
    </div>
  );
}

export default App;
