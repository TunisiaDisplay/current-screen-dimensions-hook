import useScreenDimensions from './hooks/useScreenDimentions';

import './App.css';

function App() {
  const dimensions = useScreenDimensions();
  return (
    <div className="App">
      <header className="App-header">
        <p>
        your current browser window size is 
        </p>
        <p>{dimensions.width} / {dimensions.height}</p>
        
      </header>
    </div>
  );
}

export default App;
