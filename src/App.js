// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
// import Experience from './components/Experience/experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Education/>
      {/* <Experience/> */}
    </div>
  );
}

export default App;
