import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid/Grid';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid />
      </header>
    </div>
  );
}

export default App;
