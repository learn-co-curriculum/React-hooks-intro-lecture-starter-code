import { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
// import paintings from './painting_data'



function App() {

  const [color, setColor] = useState("red") // State
  const [paintings, setPaintings] = useState([]) // State

  useEffect(() => {
    fetch("http://localhost:3000/paintings")
    .then(res => res.json())
    .then(paintings => setPaintings(paintings))
  },[]) // ComponentDidMount

  const changeColor = () => {
    setColor("blue")
  }

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={changeColor}
      />
      {/* updating the state*/}
      {/* <button onClick={() => setColor("blue")}>Change color</button>  */}

      <PaintingsList paintings={paintings} />
    </div>
  );
}

export default App;
