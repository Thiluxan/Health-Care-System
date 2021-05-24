import React from 'react'
import DoctorNavigation from '../nav/DoctorNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'

export default function Appointments() {
    const currentUser = authService.getCurrentUser()
    
    return (
        <>
            <div style={{float:'left'}}>
                <DoctorNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <h3>Recent Appointments:</h3>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Fees</th>
                                <th>Total Patients</th>
                                <th>Bookings</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                                <td>50</td>
                                <td>50</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                                <td>50</td>
                                <td>50</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                                <td>50</td>
                                <td>50</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
            </div>
        </>
    )
}
