  import './App.css';
  import Navigation from './components/Navigation';
  import Pomodoro from './components/Pomodoro';
  import Todo from './components/Todo';

  function App() {
    return (
      <div className="App">
        <div className="horizontal-layout">
          <Navigation />
          <Pomodoro />
          <Todo/>
        </div>
      </div>
    );
  }

  export default App;

