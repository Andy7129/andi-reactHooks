import { Link, Outlet } from "react-router-dom";
import "./App.css"  

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>

      <nav>
        <Link to="/home" className="mr">
          Home
        </Link>
        <Link to="/about" className="mr">
          About
        </Link>
        
        <Link to="/contact" className="mr">
          Contact
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;