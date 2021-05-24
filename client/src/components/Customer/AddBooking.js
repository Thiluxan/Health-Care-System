import React,{useState} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Form,Button} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'

export default function AddBooking() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[date,setDate] = useState('')
    const[time,setTime] = useState('')
    const[fees,setFees] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Visit created")
    }
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation/>
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
                                onChange = {(e) => setDate(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicTime" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Time" 
                                value={time}
                                onChange = {(e) => setTime(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFees" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Fees" 
                                value={fees}
                                onChange = {(e) => setFees(e.target.value)}
                                required/>
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
