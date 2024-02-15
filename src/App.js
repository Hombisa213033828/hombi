// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Journey/>
    </div>
  );
}

export default App;
