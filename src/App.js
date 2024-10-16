import './App.css';
import HowWeWork from './screens/HowWeWork/HowWeWork';
import Benefits from './screens/Benefits/Benefits';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home /Home';
import Services from './screens/Services/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <Benefits />
      <Contact />
      <HowWeWork />
      <Services />

    </div>
  );
}

export default App;
