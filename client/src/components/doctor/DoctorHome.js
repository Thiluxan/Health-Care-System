import React,{useState} from 'react'
import DoctorNavigation from '../nav/DoctorNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button,Form} from 'react-bootstrap'

export default function DoctorHome() {
    const[date,setDate] = useState('')
    const[time,setTime] = useState('')
    const[fees,setFees] = useState()
    const[patients,setPatients] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Visit created")
    }
    return (
        <>
            <div style={{float:'left'}}>
                <DoctorNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-70px'}}>Open a New Visit</h3>                        
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

                        <Form.Group controlId="formBasicPatients" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Patients" 
                                value={patients}
                                onChange = {(e) => setPatients(e.target.value)}
                                required/>
                        </Form.Group>

                        <Button variant="info" type="submit" size="lg" style={{width:'300px',marginTop:'10px'}}>
                            Create Visit
                        </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Recent Visits</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Fees</th>
                                    <th>Total Patients</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01.01.2021</td>
                                    <td>LKR 1500</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>01.01.2021</td>
                                    <td>LKR 1500</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>01.01.2021</td>
                                    <td>LKR 1500</td>
                                    <td>50</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
