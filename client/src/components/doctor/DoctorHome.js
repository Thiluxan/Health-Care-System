import React,{useState,useEffect} from 'react'
import DoctorNavigation from '../nav/DoctorNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import { Table,Button,Form} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import DoctorService from '../../service/DoctorService'
import ReactPaginate from 'react-paginate'

export default function DoctorHome() {
    const currentUser = authService.getCurrentUser()
   
    const[date,setDate] = useState('')
    const[time,setTime] = useState('')
    const[fees,setFees] = useState()
    const[patients,setPatients] = useState()
    const[doctorVisits,setDoctorVisits] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 7;
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const newDoctorVisit = {
            email:currentUser.email,
            date,
            time,
            fees,
            totalPatients:patients,
            bookings:0,
            status:'OPEN'
        }
        DoctorService.addDoctorVisit(newDoctorVisit)
        .then(response => {
            alert('DoctorVisit added')
            setDate('')
            setTime('')
            setFees('')
            setPatients('')
            window.location.replace('/doctor/appointments')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const currentPageData = doctorVisits
                            .slice(offset,offset+PER_PAGE)
                            .map(doctorVisit => (
                                <tr key={doctorVisit.id}>
                                    <td>{doctorVisit.date}</td>
                                    <td>{doctorVisit.fees}</td>
                                    <td>{doctorVisit.totalPatients}</td>
                                </tr>
                            ));
    const pageCount = Math.ceil(doctorVisits.length / PER_PAGE);
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
            </div>
        </>
    )
}
