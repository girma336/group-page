import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
