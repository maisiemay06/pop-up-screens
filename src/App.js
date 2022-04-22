import logo from './logo.svg';
import './App.css';
import TimerNav from './components/TimerNav'
import SidebarNav from './components/SidebarNav'
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <TimerNav />
      <SidebarNav />
      <main className="main-container">
        <Calendar />
      </main>
    </div>
  );
}

export default App;
