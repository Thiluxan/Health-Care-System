import React,{useState} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Form,Button} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'

export default function Contact() {
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
                <LogoutHeader/>
                <div style={{marginTop:'0px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-40px'}}>Feel free to leave a message or query</h3> 
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
                        
                        <Form.Group controlId="formBasicQuery" className="formGroups">
                            <Form.Control 
                                as="textarea" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Message"
                                rows={8} 
                                required/>
                        </Form.Group>

                        <Button variant="info" type="submit" size="lg" style={{width:'600px',marginTop:'10px'}}>
                            Send Feedback / Query
                        </Button>
                        </Form>
                    </div>
                </div>   
            </div>
        </>
    )
}
