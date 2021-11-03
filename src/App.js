import logo from './logo.svg';
import './App.css';

function App() {
  var pwInput = document.getElementsByClassName('pw-input');
  return (
    <div>
      <div className="title">Password Simulator</div>
      <div className="enter-pw-text">Enter a password:</div>
      <input className="pw-input"></input>
      <button className="set-pw-btn">Set Password</button>
    </div>
  );
}

export default App;
