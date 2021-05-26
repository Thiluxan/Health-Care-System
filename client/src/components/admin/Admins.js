import React,{useState,useEffect} from 'react'
import AdminNavigation from '../nav/AdminNavigation'
import LogoutHeader from '../nav/LogoutHeader'
import {Form,Table,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'
import UserService from '../../service/UserService'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from "react-paginate";

export default function Admins() {
    const currentUser = authService.getCurrentUser()
    
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[password,setPassword] = useState('')
    const[admins,setAdmins] = useState([])
    const[currentPage,setCurrentPage] = useState(0)

    const PER_PAGE = 6;

    useEffect(() => {
        UserService.fetchAllUsers()
        .then(response => {
            setAdmins(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            phone,
            domain:'',
            role:'ADMIN'
        }
        UserService.addUser(newUser)
        .then(response => {
            alert('New admin added')
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            window.location.replace('/admin/admins')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const updatedUser = {
            name,
            email,
            password,
            role:'ADMIN',
            phone,
            domain:'',
        }
        UserService.updateUser(email,updatedUser)
        .then(response => {
            alert('Admin updated')
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            window.location.replace('/admin/admins')
        })
        .catch(err => {
            console.log(err)
            alert('An error occurred')
        })
    }

    const handleRemove = (email) => {
        confirmAlert({
            title:'Remove Admin',
            message:'Are you sure want to remove admin',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                        UserService.deleteUser(email)
                        .then(response => {
                            alert('Removed successfully')
                            window.location.replace('/admin/admins')
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
                      window.location.replace("/admin/admins")
                  }
                }
              ]
        })
        
    }

    const handlePageClick =({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * PER_PAGE;

    const currentPageData = admins.filter(adm => adm.role === 'ADMIN')
                                    .map(admin => (
                                    <tr>
                                        <td>{admin.name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.phone}</td>
                                        <td><Button variant="danger" onClick={() => handleRemove(admin.email)}>Remove</Button></td>
                                    </tr>
                                    ))
    const pageCount = Math.ceil(admins.filter(user => user.role === 'ADMIN').length / PER_PAGE);

    return (
        <>
            <div style={{float:'left'}}>
                <AdminNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'50px'}}>
                    <div style={{float:'left'}}>
                        <Form onSubmit={handleSubmit} className="form p-5" style={{marginLeft:'-20px'}}>
                        <h3 style={{marginBottom:'25px',marginTop:'-70px'}}>Add / Edit Admin</h3>                        
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
                        <Button variant="warning" onClick={handleUpdate} size="sm" style={{width:'100px',marginTop:'10px',marginLeft:'90px'}}>
                            Update
                        </Button>
                        </Form>
                    </div>
                    <div style={{float:'right',marginTop:'30px',marginRight:'5px'}}>
                        <h3>Admins</h3>
                        <Table striped bordered hover className="text-center" style={{marginTop:'20px',width:'550px'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
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
