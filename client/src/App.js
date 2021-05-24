import './App.css';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import DoctorHome from './components/doctor/DoctorHome';
import History from './components/customer/History';
import Bookings from './components/customer/Bookings';
import AddBooking from './components/customer/AddBooking';
import Contact from './components/customer/Contact';
import CustomerHome from './components/customer/CustomerHome';
import Admins from './components/admin/Admins';
import DoctorVisits from './components/admin/DoctorVisits';
import Doctors from './components/admin/Doctors';
import Customers from './components/admin/Customers';
import Appointments from './components/admin/Appointments';
import DoctorAppointments from './components/doctor/Appointments'
import Home from './components/pages/Home';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/doctor/home" component={DoctorHome}/>
          <Route exact path="/doctor/appointments" component={DoctorAppointments}/>
          <Route exact path="/customer/home" component={CustomerHome}/>
          <Route exact path="/customer/history" component={History}/>
          <Route exact path="/customer/contact" component={Contact}/>
          <Route exact path="/customer/bookings" component={Bookings}/>
          <Route exact path="/customer/addBooking" component={AddBooking}/>
          <Route exact path="/admin/appointments" component={Appointments}/>
          <Route exact path="/admin/doctorVisits" component={DoctorVisits}/>
          <Route exact path="/admin/admins" component={Admins}/>
          <Route exact path="/admin/patients" component={Customers}/>
          <Route exact path="/admin/doctors" component={Doctors}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
