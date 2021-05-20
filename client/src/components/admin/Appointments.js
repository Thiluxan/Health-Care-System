import React,{useState} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'

export default function Appointments() {
    const[receipt,setReceipt] = useState('')
    const[customer,setCustomer] = useState('')
    const[date,setDate] = useState('')
    const[doctor,setDoctor] = useState('')
    const[fees,setFees] = useState('')

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
                            <Form.Group controlId="formBasicReceipt" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Receipt" 
                                    value={receipt}
                                    onChange = {(e) => setReceipt(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="sm" style={{width:'100px',marginTop:'0px'}}>
                                Search
                            </Button>
                        </Form>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px',marginTop:'-70px'}}>
                            <Form.Group controlId="formBasicCustomer" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Customer" 
                                    value={customer}
                                    onChange = {(e) => setCustomer(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDoctor" className="formGroups" >
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Doctor" 
                                    value={doctor}
                                    onChange = {(e) => setDoctor(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDate" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Date" 
                                    value={date}
                                    onChange = {(e) => setDate(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicFees" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Change Fees" 
                                    value={fees}
                                    onChange = {(e) => setFees(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Button variant="success" type="submit" size="sm" style={{width:'100px',marginTop:'10px'}}>
                                Complete
                            </Button>
                            <Button variant="danger" type="submit" size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                                Cancel
                            </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Recent Appointments</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Receipt</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Customer A</td>
                                    <td>01.01.2021</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>Customer A</td>
                                    <td>01.01.2021</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>Customer A</td>
                                    <td>01.01.2021</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
