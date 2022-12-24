import logo from './resources/images/vosie.jpg';
import './App.css';


import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="App">
      <img alt="vosie logo" src={logo} />
      <header className="App-header">
        <Snowfall />
        Merry Christmas, Marie!
        <br />
        <br />
        You now own www.vosiejewellery.com
      </header>
    </div>
  );
}

export default App;
