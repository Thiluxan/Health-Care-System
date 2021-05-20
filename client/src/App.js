import './App.css';
import CustomerNavigation from './components/nav/CustomerNavigation';
import AdminNavigation from './components/nav/AdminNavigation';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import DoctorNavigation from './components/nav/DoctorNavigation';
import DoctorHome from './components/doctor/DoctorHome';

function App() {
  return (
    <div>
      <DoctorHome/>
    </div>
  );
}

export default App;
