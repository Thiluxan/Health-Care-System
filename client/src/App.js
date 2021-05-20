import './App.css';
import CustomerNavigation from './components/nav/CustomerNavigation';
import AdminNavigation from './components/nav/AdminNavigation';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import DoctorNavigation from './components/nav/DoctorNavigation';

function App() {
  return (
    <div>
      <DoctorNavigation/>
    </div>
  );
}

export default App;
