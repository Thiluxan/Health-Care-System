import React,{useState,useEffect} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import CustomerService from '../../service/CustomerService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

export default function Appointments() {
    const currentUser = authService.getCurrentUser()
    
    const[receipt,setReceipt] = useState('')
    const[customer,setCustomer] = useState('')
    const[date,setDate] = useState('')
    const[doctor,setDoctor] = useState('')
    const[fees,setFees] = useState('')
    const[appointment,setAppointment] = useState({})
    const[appointments,setAppointments] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 6;

    useEffect(() => {
        CustomerService.fetchAppointments()
        .then(response => {
            setAppointments(response.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    },[])

    const handleSearch = (e) => {
        e.preventDefault()
        CustomerService.fetchAppointmentById(receipt)
        .then(response => {
            setCustomer(response.data.name)
            setDoctor(response.data.doctor)
            setDate(response.data.date)
            setFees(response.data.fees)
            setAppointment(response.data)
        })
        .catch(err => console.log(err))
    }

    const handleCancel = e => {
        e.preventDefault()
        confirmAlert({
            title:'Cancel Doctor Visit',
            message:'Are you sure want to cancel Doctor visit',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        CustomerService.deleteAppointment(appointment.id)
                        .then(response => {
                            alert('Cancelled successfully')
                            setReceipt('')
                            setCustomer('')
                            setDoctor('')
                            setDate('')
                            setFees('')
                            setAppointment('')
                            window.location.reload('/admin/appointments')
                        })
                        .catch(err => {
                            console.log(err)
                            alert('Error Occurred')
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

    const handleSubmit = e => {
        e.preventDefault()
        const updatedAppointment = {
            name:appointment.name,
            email:appointment.email,
            doctor:appointment.doctor,
            fees:appointment.fees,
            phone:appointment.phone,
            date:appointment.date,
            time:appointment.time,
            status:'CLOSED'
        }
        console.log(updatedAppointment)
        CustomerService.updateAppointment(appointment.id,updatedAppointment)
        .then(response => {
            alert('Completed Appointment')
            setReceipt('')
            setCustomer('')
            setDoctor('')
            setDate('')
            setFees('')
            setAppointment('')
            window.location.reload('/admin/appointments')
        })
        .catch(err =>{
            console.log(err)
            alert('An error occurred')
        })
    }

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const currentPageData = appointments.map(appointment => (
                                                <tr key={appointment.id}>
                                                    <td>{appointment.id}</td>
                                                    <td>{appointment.name}</td>
                                                    <td>{appointment.date}</td>
                                                    <td>{appointment.doctor}</td>
                                                </tr>
                                            )).reverse()
    const pageCount = Math.ceil(appointments.length / PER_PAGE);

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation name={currentUser.name}/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'20px'}}>
                    <div style={{float:'left',marginLeft:'-30px'}}>
                        <Form onSubmit={handleSearch} className="form p-5" style={{marginLeft:'-20px',marginTop:'-20px'}}>
                            <Form.Group controlId="formBasicReceipt" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Receipt" 
                                    value={receipt}
                                    onChange = {(e) => setReceipt(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="sm" style={{width:'100px',marginTop:'0px'}}>
                                Search
                            </Button>
                        </Form>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px',marginTop:'-70px'}}>
                            <Form.Group controlId="formBasicCustomer" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Customer" 
                                    value={customer}
                                    onChange = {(e) => setCustomer(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDoctor" className="formGroups" >
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Doctor" 
                                    value={doctor}
                                    onChange = {(e) => setDoctor(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDate" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Date" 
                                    value={date}
                                    onChange = {(e) => setDate(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicFees" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Change Fees" 
                                    value={fees}
                                    onChange = {(e) => setFees(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Button 
                                variant="success" 
                                type="submit" 
                                size="sm" 
                                style={{width:'100px',marginTop:'10px'}}
                                onClick = {handleSubmit}
                                >
                                Complete
                            </Button>
                            <Button 
                                variant="danger" 
                                type="submit" 
                                size="sm" 
                                style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}
                                onClick={handleCancel}
                                >
                                Remove
                            </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Recent Appointments</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Receipt</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Doctor</th>
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
