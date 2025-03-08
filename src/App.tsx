import React from 'react';
import './App.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { TopNav, LeftNav, Grid } from './components';

ModuleRegistry.registerModules([AllCommunityModule]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav>
        <TopNav />
      </nav>
      <div className='aside-center'>
        <aside>
          <LeftNav />
        </aside>
        <center>
          <Grid />
        </center>
      </div>
    </div>
  );
}

export default App;
