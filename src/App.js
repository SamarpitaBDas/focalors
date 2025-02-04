import './App.css';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Pomodoro from './components/Pomodoro'
import Todo from './components/Todo';
import MoodTracker from './components/MoodTracker'
import Calender from './components/Calender'

  function App() {
    return (
      <div className="App">
        <div className="horizontal-layout">
          <Navigation />
          <Pomodoro />
          <div className='vertical-layout'>
            <Todo/>
            <MoodTracker/>
            <Calender/>
          </div>
        </div>
        <div className='dashboard'>
          <Dashboard/>
        </div>
      </div>
    );
  }

  export default App;

