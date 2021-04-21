import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import Clock from "./components/Clock";
import Form from "./components/Form";
function App() {
  return (
<div>
        <ul>
          <User info="User 01" age="30" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
        <Clock title="Current data naja = " />
        <Form />
      </div>
  );
}

export default App;
