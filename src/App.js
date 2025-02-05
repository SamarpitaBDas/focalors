import './App.css';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Pomodoro from './components/Pomodoro'
import Todo from './components/Todo';
import MoodTracker from './components/MoodTracker'
import Calender from './components/Calender'
import Profile from './components/Profile';
<<<<<<< HEAD
import HabitTracker from './components/HabitTracker';
=======
>>>>>>> 492d05948d27feed438a7197e624382c70f443c0

  function App() {
    return (
      <div className="App">
        <div className="horizontal-layout">
          <div className='vertical-layout-1'>
            <Navigation />
            <Profile />
          </div>
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
        <div className='habits'>
          <HabitTracker/>
        </div>
      </div>
    );
  }

  export default App;

