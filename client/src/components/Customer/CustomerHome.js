import React,{useState} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Form,Button,Card} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'

export default function CustomerHome() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[query,setQuery] = useState('')

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
                <div>
                <LogoutHeader/>
                <div style={{marginTop:'0px'}}>
                    <Card style={{ width: '54rem',marginLeft:'80px',marginTop:'15px'}}>
                        <Card.Body>
                            <Card.Title>Dr. Doctor A</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Specialist Surgeon</Card.Subtitle>
                            <Card.Text>
                            25.05.2021 - 18:00
                            </Card.Text>
                            <div style={{float:'right',marginTop:'-80px'}}>
                            <Button href="/customer/addBooking">Book Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '54rem',marginLeft:'80px',marginTop:'15px'}}>
                        <Card.Body>
                            <Card.Title>Dr. Doctor A</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Specialist Surgeon</Card.Subtitle>
                            <Card.Text>
                            25.05.2021 - 18:00
                            </Card.Text>
                            <div style={{float:'right',marginTop:'-80px'}}>
                            <Button href="#">Book Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '54rem',marginLeft:'80px',marginTop:'15px'}}>
                        <Card.Body>
                            <Card.Title>Dr. Doctor A</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Specialist Surgeon</Card.Subtitle>
                            <Card.Text>
                            25.05.2021 - 18:00
                            </Card.Text>
                            <div style={{float:'right',marginTop:'-80px'}}>
                            <Button href="#">Book Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '54rem',marginLeft:'80px',marginTop:'15px'}}>
                        <Card.Body>
                            <Card.Title>Dr. Doctor A</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Specialist Surgeon</Card.Subtitle>
                            <Card.Text>
                            25.05.2021 - 18:00
                            </Card.Text>
                            <div style={{float:'right',marginTop:'-80px'}}>
                            <Button href="#">Book Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>  
                </div> 
            </div>
        </>
    )
}
