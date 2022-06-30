import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { useState, React } from "react";
import logo from "./assets/items/pokedex.png";


function App() {
  const [start, setStart] = useState(false);

 

  const startPokedex = () => {
    setStart(true);
  
  };

  return (
    <BrowserRouter className="App">
     <Main />
    </BrowserRouter>
  );
}

export default App;
