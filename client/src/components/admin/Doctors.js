import React,{useState,useEffect} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import UserService from '../../service/UserService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

export default function Doctors() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[password,setPassword] = useState('')
    const[domain,setDomain] = useState('')
    const[users,setUsers] = useState([])
    const[doctor,setDoctor] = useState({})
    const[currentPage,setCurrentPage] = useState(0)
    const[selectedEmail,setSelectedEmail] = useState('')

    const PER_PAGE = 6;

    const handleSubmit = () => {
        const newUser = {
            name,
            email,
            password,
            role:'DOCTOR',
            phone,
            domain            
        }
        UserService.addUser(newUser)
        .then(response => {
            alert('New Doctor added')
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setDomain('')
            window.location.replace('/admin/doctors')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    useEffect(() => {
        UserService.fetchAllUsers()
        .then(response => {
            setUsers(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleView = email => {
        setSelectedEmail(email)
        UserService.fetchOneUser(email)
        .then(response => {
            setDoctor(response.data)
            setName(response.data.name)
            setEmail(response.data.email)
            setPhone(response.data.phone)
            setDomain(response.data.domain)
        })
        .catch(err => console.log(err))
    }

    const handleUpdate = () => {
        const updatedUser = {
            name,
            email,
            phone,
            domain,
            role:'DOCTOR'
        }
        UserService.updateUser(selectedEmail,updatedUser)
        .then(response => {
            alert('Doctor updated')
            setName('')
            setEmail('')
            setPhone('')
            setDomain('')
            window.location.replace('/admin/doctors')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const handleDelete = email => {
        confirmAlert({
            title:'Remove Doctor',
            message:'Are you sure want to remove Doctor',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        UserService.deleteUser(email)
                        .then(response => {
                            alert('Removed successfully')
                            window.location.replace('/admin/doctors')
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
                      window.location.replace("/admin/doctors")
                  }
                }
              ]
        })
    }

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const currentPageData =  users.filter(user => user.role === 'DOCTOR')
                                    .map(patient => (
                                        <tr>
                                            <td>{patient.name}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.phone}</td>
                                            <td><Button variant="warning" onClick={() => handleView(patient.email)}>View</Button></td>
                                            <td><Button variant="danger" onClick={() => handleDelete(patient.email)}>X</Button></td>
                                        </tr>
                                    ))
    const pageCount = Math.ceil(users.filter(user => user.role === 'CUSTOMER').length / PER_PAGE);

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation name={currentUser.name}/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-70px'}}>Add / Edit Doctor</h3>                        
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

                        <Form.Group controlId="formBasicDomain" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="text" 
                                placeholder="Domain" 
                                value={domain}
                                onChange = {(e) => setDomain(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                                required/>
                        </Form.Group>

                        <Button variant="success" type="submit" size="sm" style={{width:'100px',marginTop:'10px'}}>
                            Add
                        </Button>
                        <Button variant="info" onClick={handleUpdate} size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                            Update
                        </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'0px'}}>
                        <h3>Doctors</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
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
            </div>
        </>
    )
}
