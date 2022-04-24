import './App.css';
import {
  BrowserRouter as Router, Link,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>

      <Navbar />
    </Router>
  );
}

export default App;
