// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education/>
    </div>
  );
}

export default App;
