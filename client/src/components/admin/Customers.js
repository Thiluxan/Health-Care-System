import React,{useState,useEffect} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import UserService from '../../service/UserService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

export default function Customers() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[searchEmail,setSearchEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[users,setUsers] = useState([])
    const[customer,setCustomer] = useState({})
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 6;

    useEffect(() => {
        UserService.fetchAllUsers()
        .then(response => {
            setUsers(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleUpdate = (e) => {
        e.preventDefault()
        const updatedUser = {
            name,
            email,
            phone,
            domain:"",
            role:'CUSTOMER'
        }
        UserService.updateUser(email,updatedUser)
        .then(response => {
            alert('Customer updated')
            setName('')
            setEmail('')
            setPhone('')
            window.location.replace('/admin/patients')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const handleDelete = e => {
        e.preventDefault()
        confirmAlert({
            title:'Remove Customer',
            message:'Are you sure want to remove customer',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        UserService.deleteUser(email)
                        .then(response => {
                            alert('Removed successfully')
                            setCustomer('')
                            setName('')
                            setEmail('')
                            setPhone('')
                            window.location.replace('/admin/patients')
                        })
                        .catch(err => {
                            console.log(err)
                            alert('Failed to Remove')
                        })
                  }
                },
                {
                  label: 'No',
                  onClick: () => {
                      window.location.replace("/admin/patients")
                  }
                }
              ]
        })
        
        
    }

    const handleSearch = e => {
        e.preventDefault()
        UserService.fetchOneUser(searchEmail)
        .then(response => {
            setCustomer(response.data)
            setName(response.data.name)
            setEmail(response.data.email)
            setPhone(response.data.phone)
        })
        .catch(err => console.log(err))
    }

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const currentPageData =  users.filter(user => user.role === 'CUSTOMER')
                                    .map(patient => (
                                        <tr>
                                            <td>{patient.name}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.phone}</td>
                                        </tr>
                                    ))
    const pageCount = Math.ceil(users.filter(user => user.role === 'CUSTOMER').length / PER_PAGE);

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'20px'}}>
                    <div style={{float:'left',marginLeft:'-30px'}}>
                        <Form onSubmit={handleSearch} className="form p-5" style={{marginLeft:'-20px',marginTop:'-20px'}}>
                            <Form.Group controlId="formBasicSearchEmail" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="email" 
                                    placeholder="Email" 
                                    value={searchEmail}
                                    onChange = {(e) => setSearchEmail(e.target.value)}
                                    required/>
                            </Form.Group>
                            <Button variant="secondary" type="submit" size="sm" style={{width:'100px',marginTop:'0px'}}>
                                Search
                            </Button>
                        </Form>
                        <Form className="form p-5" style={{marginLeft:'-20px',marginTop:'-70px'}}>
                            
                            <Form.Group controlId="formBasicName" className="formGroups" >
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Name" 
                                    value={name}
                                    onChange = {(e) => setName(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="email" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone" className="formGroups">
                                <Form.Control 
                                    size="lg"
                                    type="text" 
                                    placeholder="Phone" 
                                    value={phone}
                                    onChange = {(e) => setPhone(e.target.value)}
                                    required/>
                            </Form.Group>


                            <Button variant="success" onClick={handleUpdate} size="sm" style={{width:'100px',marginTop:'10px'}}>
                                Update
                            </Button>
                            <Button variant="danger" onClick={handleDelete} size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                                Remove
                            </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Customers</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPageData
                                }
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
