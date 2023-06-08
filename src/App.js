
import './App.css';
import Myphoto from './assets/Myphoto.jpeg';
import Fullname from './components/Fullname';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App">
      <img src={Myphoto}></img>
      <Fullname />
      <Aboutme />
      <Contactme />
    </div>
  );
}

export default App;
