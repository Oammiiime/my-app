import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import Clock from "./components/Clock";
function App() {
  return (
<div>
        <ul>
          <User info="User 01" age="30" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
        <Clock title="Current data naja = " />
      </div>
  );
}

export default App;
