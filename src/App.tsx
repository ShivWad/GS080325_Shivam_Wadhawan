import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import TopNav from './components/TopNav/TopNav';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <Grid />
      </header>
    </div>
  );
}

export default App;
