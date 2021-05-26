import React,{useEffect, useState} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Button,Card} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'
import authService from '../../authentication/auth-service'
import DoctorService from '../../service/DoctorService'
import ReactPaginate from "react-paginate";
import {Link, useHistory} from 'react-router-dom'

export default function CustomerHome() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[query,setQuery] = useState('')
    const[doctorVisits,setDoctorVisits] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 4;

    useEffect(() => {
        DoctorService.fetchAllDoctorVisits()
        .then(response => {
            setDoctorVisits(response.data)
            console.log(doctorVisits)
        })
        .catch(err => console.log(err))
    },[])

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Visit created")
    }

    const currentPageData = doctorVisits.filter(visit => visit.status === 'OPEN')
                                        .map(doctorVisit => (
                                            <Card style={{ width: '54rem',marginLeft:'80px',marginTop:'15px'}}>
                                                <Card.Body>
                                                    <Card.Title>{doctorVisit.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{doctorVisit.domain}</Card.Subtitle>
                                                    <Card.Text>
                                                    {doctorVisit.date} - {doctorVisit.time}
                                                    </Card.Text>
                                                    <div style={{float:'right',marginTop:'-80px'}}>
                                                        <Link to={{
                                                            pathname:'/customer/addBooking',
                                                            state:{
                                                                doctorVisit:doctorVisit
                                                            }
                                                        }}>
                                                            <Button>Book Now</Button>
                                                        </Link>
                                                    
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            ))
    const pageCount = Math.ceil(doctorVisits.length / PER_PAGE);
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation name={currentUser.name}/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <div>
                <LogoutHeader/>
                <div style={{marginTop:'0px'}}>
                    {currentPageData}
                    <br/><br/>
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
            </div>
        </>
    )
}
