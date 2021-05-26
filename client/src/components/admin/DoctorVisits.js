import React,{useState,useEffect} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import DoctorService from '../../service/DoctorService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

export default function DoctorVisits() {
    const currentUser = authService.getCurrentUser()
    
    const [doctorVisits,setDoctorVisits] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 5;

    useEffect(() => {
        DoctorService.fetchAllDoctorVisits()
        .then(response => {
            setDoctorVisits(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleCancel = (id) => {
        confirmAlert({
            title:'Cancel Doctor Visit',
            message:'Are you sure want to cancel Doctor visit',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        DoctorService.cancelDoctorVist(id)
                        .then(res => {
                            alert('Cancelled successfully')
                            window.location.replace('/admin/doctorVisits')
                        })
                        .catch(err => {
                            console.log(err)
                            alert('An error occurred')
                        })
                  }
                },
                {
                  label: 'No',
                  onClick: () => {
                      window.location.replace("/admin/doctorVisits")
                  }
                }
              ]
        })
        
    }

    const handleComplete = (doctorVisit) => {
        const updatedDoctorVisit = {
            email:doctorVisit.email,
            name:doctorVisit.name,
            domain:doctorVisit.domain,
            date:doctorVisit.date,
            time:doctorVisit.time,
            fees:doctorVisit.fees,
            totalPatients:doctorVisit.totalPatients,
            booking:doctorVisit.booking,
            status:'CLOSED'
        }
        DoctorService.updateDoctorVisit(doctorVisit.id,updatedDoctorVisit)
        .then(res => {
            alert('Completed successfully')
            window.location.replace("/admin/doctorVisits")
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const currentPageData = doctorVisits.filter(visit => visit.status === 'OPEN')
                                        .map(doctorVisit => (
                                            <tr key={doctorVisit.id}>
                                                <td>{doctorVisit.name}</td>
                                                <td>{doctorVisit.date}</td>
                                                <td>{doctorVisit.time}</td>
                                                <td>{doctorVisit.totalPatients}</td>
                                                <td>{doctorVisit.booking}</td>
                                                <td>{doctorVisit.fees}</td>
                                                <td><Button variant="danger" onClick={() => handleCancel(doctorVisit.id)}>Cancel</Button></td>
                                                <td><Button variant="success" onClick={() => handleComplete(doctorVisit)}>Complete</Button></td>
                                            </tr>
                                        )).reverse()
    const pageCount = Math.ceil(doctorVisits.length / PER_PAGE);
    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation name={currentUser.name}/>
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
                                <th>Total</th>
                                <th>Bookings</th>
                                <th>Fees</th>
                                <th></th>
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
