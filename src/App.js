import React from 'react';
import StarWarsFacts from './components/StarWarsFactsApp/StarWarFacts/StarWarsFacts';
import PhotoManager from './components/PhotoMangerApp/PhotoManager/PhotoManger';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarWarsFacts />
      <PhotoManager />
    </div>
  );
}

export default App;