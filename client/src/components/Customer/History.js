import React,{useState,useEffect} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Table} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'
import ReactPaginate from "react-paginate";
import CustomerService from '../../service/CustomerService'

export default function History() {
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

    const currentPageData = bookings.filter(booking => booking.status === 'CLOSED')
                                    .map(appointment => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.id}</td>
                                            <td>{appointment.doctor}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.fees}</td>
                                        </tr>
                                    ))
    const pageCount = Math.ceil(bookings.length / PER_PAGE);
    
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
