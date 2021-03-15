# React-Hooks

## SWBATs

* Understand how react hooks are used to declare and update the state
* Use `useEffect()` to replace `componentDidMount()` lifecycle method

## Outline

    10m What are hooks?
    10m `useState()`
    15m `useEffect()`
    10m CFU: `useState()` to add votes
    ===
    45m Total

### What are hooks?

To hook react class functionality to a functional component. Find more details [here](https://reactjs.org/docs/hooks-overview.html)

- Introduced: React v16.8.0
- Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- This makes development easier and improves performance. 
- Migrating code to use hooks is easy.
- No need of using class components any more!
- Hooks are only used inside a functional component.

### useState()

- create state color which is red and change it when button is clicked.

```js
// App.js
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import paintings from './painting_data';

function App() {

const [color, setColor] = useState("red") // State

return (
  <div>
    <NavBar
      color={color}
      title="Paintr"
      icon="paint brush"
      description="an app we made"
    />
    <button onClick={() => setColor("blue")}>Change color</button>

    <PaintingsList paintings={paintings} />
  </div>
  );
}

export default App;
```
- Change state color from NavBar component.

```js
// App.js
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import paintings from './painting_data';

function App() {

const [color, setColor] = useState("red") // State

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
    <PaintingsList paintings={paintings} />
  </div>
  );
}

export default App;

// NavBar.js

const NavBar = props => {
return (
  <div className={`ui inverted ${props.color} menu`}>
    <a className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </a>
    <button onClick={props.changeColor}>Change color</button>
  </div>
  );
};

export default NavBar;
```

### useEffect()

- Use `useEffect()` to fetch data from json server. First don't pass second argument and show network tab that how `fetch` is making request infinite times. Explain how to use of second argument for different lifecycle method.

```js
useEffect(() => console.log("mounted or updated / rendered"))
useEffect(() => console.log("mounted"),[])
useEffect(() => console.log("State changed"),[state.value])
useEffect(() => {
    return () => {
    console.log('will unmount');
  }
}, [])
```
- fetching paintings:

```js
// App.js

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

```

### CFU: `useState()` to add votes

Task: Display votes and add votes using `useState()`

Solution:
```js
// Painting.js

import { useState } from "react";

const Painting = props => {

  const [votes, addVote] = useState(props.painting.votes)

  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <div class="ui labeled button" tabindex="0">
          <div class="ui red button" onClick={() => addVote(votes+1)}>
            <i class="heart icon"></i> Add Vote
          </div>
          <a class="ui basic red left pointing label">
            {votes}
          </a>
      </div>
    </div>
      
  );
};

export default Painting;

```