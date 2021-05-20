import React,{useState} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'


export default function Customers() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[searchEmail,setSearchEmail] = useState('')
    const[password,setPassword] = useState('')
    const[customerID,setCustomerID] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Admins created")
    }

    const handleSearch = e => {
        e.preventDefault()
        console.log("Search Function")
    }

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'20px'}}>
                    <div style={{float:'left',marginLeft:'-30px'}}>
                        <Form onSubmit={handleSearch} className="form p-5" style={{marginLeft:'-20px',marginTop:'-20px'}}>
                            <Form.Group controlId="formBasicSearchEmail" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="email" 
                                    placeholder="Email" 
                                    value={searchEmail}
                                    onChange = {(e) => setSearchEmail(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="sm" style={{width:'100px',marginTop:'0px'}}>
                                Search
                            </Button>
                        </Form>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px',marginTop:'-70px'}}>
                            <Form.Group controlId="formBasicCustomerID" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="CustomerID" 
                                    value={customerID}
                                    onChange = {(e) => setCustomerID(e.target.value)}
                                    required/>
                            </Form.Group>

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

                            <Form.Group controlId="formBasicPassword" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="password" 
                                    placeholder="Change Password" 
                                    value={password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Button variant="success" type="submit" size="sm" style={{width:'100px',marginTop:'10px'}}>
                                Update
                            </Button>
                            <Button variant="danger" type="submit" size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                                Remove
                            </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Customers</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>C_ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Customer A</td>
                                    <td>cusA@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
