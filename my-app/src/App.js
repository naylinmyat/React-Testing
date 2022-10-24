import logo from './logo.svg';
import './App.css';
import Example from "./components/slidebar"
import useCounter from "./hooks/count"

function App() {
  const [count,oddIncreaseCount,evenIncreaseCount] = useCounter({
    startPoint: 100,
  }) 
  return (
    <div className="App">
      <Example />
      {/* <div>
        <h1>
          COUNT :{count}
        </h1>
        <button onClick={oddIncreaseCount}>Odd</button>|
        <button onClick={evenIncreaseCount}>Even</button>
      </div> */}
    </div>
  );
}

export default App;
