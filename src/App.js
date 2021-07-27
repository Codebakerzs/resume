import React from 'react'; 
import Resume from "./Resume.jsx";
import './App.css';
import { BrowserRouter as Router,} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Resume />
      </Router>
    </>
  );
}

export default App;
