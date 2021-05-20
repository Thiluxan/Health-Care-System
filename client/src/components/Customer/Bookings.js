import React from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'

export default function Bookings() {
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <h3>Active Bookings:</h3>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Receipt</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Fees</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>LKR 1500</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>LKR 1500</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>Dr.Doctor A</td>
                                <td>01.01.2021</td>
                                <td>00.00</td>
                                <td>LKR 1500</td>
                                <td><Button variant="danger">Cancel</Button></td>
                            </tr>
                            
                        </tbody>
                        </Table>
                    </div>
            </div>
        </>
    )
}
