import React,{useState} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'

export default function Doctors() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[password,setPassword] = useState('')
    const[domain,setDomain] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Admins created")
    }

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-70px'}}>Add / Edit Doctor</h3>                        
                        <Form.Group controlId="formBasicName" className="formGroups" >
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

                        <Form.Group controlId="formBasicPhone" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Phone" 
                                value={phone}
                                onChange = {(e) => setPhone(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDomain" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Domain" 
                                value={domain}
                                onChange = {(e) => setDomain(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                                required/>
                        </Form.Group>

                        <Button variant="success" type="submit" size="sm" style={{width:'100px',marginTop:'10px'}}>
                            Submit
                        </Button>
                        <Button variant="danger" type="submit" size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                            Remove
                        </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Doctors</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Doctor A</td>
                                    <td>doctor@gmail.com</td>
                                    <td><Button variant="warning">View</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
