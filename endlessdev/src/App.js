import About from './About';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
