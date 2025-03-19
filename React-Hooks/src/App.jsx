import { useEffect, useState, useRef, useContext, createContext } from 'react'
import './App.css'

const UserContext = createContext("");

function Component1() {
  const [user, setUser] = useState("Jhon Wick");

  return (
    <div style={{backgroundColor:"yellow"}}>
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <h1>Component 1</h1>
      <Component2 />
    </UserContext.Provider>
    </div>
  );
}

function Component2() {
  return (
    <div style={{backgroundColor:"black", color:"White"}}>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div style={{backgroundColor:"purple"}}>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again! in component 3`}</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => num * 2);
  }, [num]);

  const boxElement = useRef(null);

  const changeColor = () => {
    if (boxElement.current) {
      boxElement.current.style.backgroundColor =
        boxElement.current.style.backgroundColor === "blue" ? "red" : "blue";
    }
  }

  return (
    <>
      <div className="container">
        <h1><u>useState Example</u>:</h1>
        <p>useState is used to manage the state in react app.</p>
        <h2>The number of time clicked : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
      </div>

      <hr />

      <div className="container">
          <h1><u>useEffect Example</u>:</h1>
          <p>useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
          <p>Count: {num}</p>
          <button onClick={() => setNum((c) => c + 1)}>+</button>
          <p>Calculation: {calculation}</p>
      </div>

      <hr />

      <div className="container">
        <h1>
          <u>useRef Example</u>:
        </h1>
        <p>useRef is used to access the elements in the DOM.</p>
        <div className="box" ref={boxElement} style={{ width: "100px", height: "100px", backgroundColor: "red" }}></div>
        <br />
        <button onClick={changeColor}>Change Color</button>
      </div>

      <hr />
      
      <div className="container">
        <h1><u>useContext Example</u>:</h1>
        <p>useContext allows child components to access React state from a parent component without needing to pass it down through props at each level of the component hierarchy.</p>
      </div>

      <Component1 />
        
      <hr />

    </>
  )
}

export default App
