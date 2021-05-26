import React, { useState,useEffect } from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'
import ReactPaginate from "react-paginate";
import CustomerService from '../../service/CustomerService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Bookings() {
    const currentUser = authService.getCurrentUser()
    const [bookings,setBookings] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 5;

    useEffect(() => {
        CustomerService.fetchAppointmentsByEmail(currentUser.email)
        .then(response => {
            setBookings(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const cancelBooking = (id) => {
        confirmAlert({
            title:'Customer Booking',
            message:'Are you sure want to cancel booking',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        CustomerService.deleteAppointment(id)
                        .then(response => {
                            alert('Canceled successfully')
                            window.location.replace("/customer/bookings")
                        })
                        .catch(err => {
                            console.log(err)
                            alert('error occurred')
                        })
                  }
                },
                {
                  label: 'No',
                  onClick: () => {
                      window.location.replace("/customer/bookings")
                  }
                }
              ]
        })
    }

    const currentPageData = bookings.filter(booking => booking.status === 'OPEN')
                                    .map(appointment => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.id}</td>
                                            <td>{appointment.doctor}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.time}</td>
                                            <td>{appointment.fees}</td>
                                            <td><Button variant="danger" onClick={() => cancelBooking(appointment.id)}>Cancel</Button></td>
                                        </tr>
                                    ))
    const pageCount = Math.ceil(bookings.length / PER_PAGE);
    
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation name={currentUser.name}/>
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
                              {currentPageData}                      
                        </tbody>
                        </Table>
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />
                    </div>
            </div>
        </>
    )
}
