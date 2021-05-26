import React,{useEffect, useState} from 'react'
import DoctorNavigation from '../nav/DoctorNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import DoctorService from '../../service/DoctorService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import ReactPaginate from "react-paginate";

export default function Appointments() {
    const currentUser = authService.getCurrentUser()
    const[doctorVisits,setDoctorVisits] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 5;
    
    useEffect(() => {
        DoctorService.fetchOneDoctorVisits(currentUser.email)
        .then(response => {
            setDoctorVisits(response.data)
            console.log(doctorVisits)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const cancelVisit = (id) => {
        confirmAlert({
            title:'Confirmation of Cancel',
            message:'Are you sure want to cancel visit',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        DoctorService.cancelDoctorVist(id)
                        .then(response => {
                            alert('Canceled successfully')
                            window.location.replace("/doctor/appointments")
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
                      window.location.replace("/doctor/appointments")
                  }
                }
              ]
        })
    }

    const currentPageData = doctorVisits.slice(offset,offset+PER_PAGE)
                                        .filter(doctorVisit => doctorVisit.status === 'OPEN')
                                        .map(visit => (
                                            <tr key={visit.id}>
                                                <td>{visit.date}</td>
                                                <td>LKR {visit.fees}</td>
                                                <td>{visit.totalPatients}</td>
                                                <td>{visit.booking}</td>
                                                <td><Button variant="danger" onClick={() => cancelVisit(visit.id)}>Cancel</Button></td>
                                            </tr>
                                        ));

    const pageCount = Math.ceil(doctorVisits.length / PER_PAGE);
    return (
        <>
            <div style={{float:'left'}}>
                <DoctorNavigation name={currentUser.name}/>
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
