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
import Loading from './components/pages/Loading';
import DoctorRoute from './authentication/DoctorRoute'
import AdminRoute from './authentication/AdminRoute'
import CustomerRoute from './authentication/CustomerRoute'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <DoctorRoute exact path="/doctor/home" component={DoctorHome}/>
          <DoctorRoute exact path="/doctor/appointments" component={DoctorAppointments}/>
          <CustomerRoute exact path="/customer/home" component={CustomerHome}/>
          <CustomerRoute exact path="/customer/history" component={History}/>
          <CustomerRoute exact path="/customer/contact" component={Contact}/>
          <CustomerRoute exact path="/customer/bookings" component={Bookings}/>
          <CustomerRoute exact path="/customer/addBooking" component={AddBooking}/>
          <AdminRoute exact path="/admin/appointments" component={Appointments}/>
          <AdminRoute exact path="/admin/doctorVisits" component={DoctorVisits}/>
          <AdminRoute exact path="/admin/admins" component={Admins}/>
          <AdminRoute exact path="/admin/patients" component={Customers}/>
          <AdminRoute exact path="/admin/doctors" component={Doctors}/>
          <Route exact path="/loading" component={Loading}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
