import React from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Table} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'

export default function History() {
    const currentUser = authService.getCurrentUser()
    
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <h3>Recent Consultations:</h3>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Receipt</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>LKR 1500</td>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
            </div>
        </>
    )
}
