import React,{useState,useLocation} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Form,Button} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'
import CustomerService from '../../service/CustomerService'
import DoctorService from '../../service/DoctorService'

export default function AddBooking(props) {
    const currentUser = authService.getCurrentUser()
   
    const doctorVisit = props.location.state.doctorVisit
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[date,setDate] = useState(doctorVisit.date)
    const[phone,setPhone] = useState('')
    const[fees,setFees] = useState(doctorVisit.fees)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newAppointment = {
            name,
            email,
            doctor:doctorVisit.name,
            fees,
            phone,
            date:doctorVisit.date,
            time:doctorVisit.time,
            status:'OPEN'
        }
        CustomerService.addAppointment(newAppointment)
        .then(response => {
            const updatedDoctorVisit = {
                email:doctorVisit.email,
                name:doctorVisit.name,
                domain:doctorVisit.domain,
                date:doctorVisit.date,
                time:doctorVisit.time,
                fees:doctorVisit.fees,
                totalPatients:doctorVisit.totalPatients,
                booking:doctorVisit.booking + 1,
                status: doctorVisit.booking + 1 < doctorVisit.totalPatients ? 'OPEN' : 'CLOSED'
            }
            DoctorService.updateDoctorVisit(doctorVisit.id,updatedDoctorVisit)
            .then(res => {
                alert('Booking added')
                setDate('')
                setFees('')
                setName('')
                setEmail('')
                setPhone('')
                window.location.replace('/customer/bookings')
            })
            .catch(error => {
                console.log(error)
                alert('An error occurred')
            })
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation name={currentUser.name}/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-70px'}}>Consultation - Dr.Doctor A</h3> 
                        <Form.Group controlId="formBasicName" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Name" 
                                value={name}
                                onChange = {(e) => setName(e.target.value)}
                                required/>
                        </Form.Group> 
                        <Form.Group controlId="formBasicEmail" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                required/>
                        </Form.Group>                      
                        <Form.Group controlId="formBasicDate" className="formGroups" >
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Date" 
                                value={date}
                                readOnly/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Phone" 
                                value={phone}
                                onChange = {(e) => setPhone(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFees" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Fees" 
                                value={fees}
                                readOnly/>
                        </Form.Group>

                        <Button variant="info" type="submit" size="lg" style={{width:'300px',marginTop:'10px'}}>
                            Book Now
                        </Button>
                        </Form>
                    </div>
                </div>   
            </div>
        </>
    )
}
