import './App.css';
import CustomerNavigation from './components/nav/CustomerNavigation';
import AdminNavigation from './components/nav/AdminNavigation';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import DoctorNavigation from './components/nav/DoctorNavigation';
import DoctorHome from './components/doctor/DoctorHome';
import History from './components/Customer/History';
import Bookings from './components/Customer/Bookings';
import AddBooking from './components/Customer/AddBooking';
import Contact from './components/Customer/Contact';
import CustomerHome from './components/Customer/CustomerHome';

function App() {
  return (
    <div>
      <CustomerHome/>
    </div>
  );
}

export default App;
