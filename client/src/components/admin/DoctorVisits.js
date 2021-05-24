import React from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'

export default function DoctorVisits() {
    const currentUser = authService.getCurrentUser()
   
    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <h3>Current Doctor Visits:</h3>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Patients</th>
                                <th>Fees</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>25</td>
                                <td>LKR 1500</td>
                                <td><Button variant="success">Complete</Button></td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>25</td>
                                <td>LKR 1500</td>
                                <td><Button variant="success">Complete</Button></td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>25</td>
                                <td>LKR 1500</td>
                                <td><Button variant="success">Complete</Button></td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
            </div>
        </>
    )
}
