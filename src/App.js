// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/ContactForm/ContactForm';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education/>
      <Portfolio/> 
      <ContactForm/>
    </div>
  );
}

export default App;
