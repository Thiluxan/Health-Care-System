import React,{useState} from 'react'
import TopNavigation from '../nav/TopNavigation'
import HealthHome from '../../assets/health_home.png'
import {Figure,Form,Button} from 'react-bootstrap'

import authService from '../../authentication/auth-service'

export default function SignUp() {
    const currentUser = authService.getCurrentUser()
    if(currentUser != null){
        window.location.replace('/loading')
    }
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[name,setName] = useState('')
    const[phone,setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        authService.register(name,email,password,'CUSTOMER',phone,'')
        .then(response => {
            console.log(response)
            alert("Registered successfully")
            window.location.replace('/login')
        })
        .catch(err =>{ 
            console.log(err)
            alert("Error occurred")
        })
        setEmail('')
        setPassword('')
        setName('')
        setPhone('')
    }

    return (
        <>
            <TopNavigation/>
            <div>
                <div style={{float:'left'}}>
                    <Figure style={{marginLeft:'180px',marginTop:'40px'}}>
                        <Figure.Image
                            src={HealthHome}
                            alt="Welcome Image"
                            height={500}
                            width={500}
                            className="p-15"
                        />
                    </Figure>
                </div>
                <div style={{float:'right'}}>
                    
                    <Form onSubmit={handleSubmit} className="form">
                        <h2 style={{textAlign:'center',marginBottom:'15px'}}>Register Here</h2>
                        <p className='text-center text-danger' style={{fontSize:'15px'}}>Only patients can register here</p>
                        
                        <Form.Group controlId="formBasicName" className="formGroups">
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

                        <Form.Group controlId="formBasicPassword" className="formGroups">
                            <Form.Control 
                                size="lg"
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
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

                        <Button variant="primary" type="submit" size="lg" style={{width:'300px',marginTop:'10px'}}>
                            Register
                        </Button><br/><br/>
                        Already Have an Account ? <a href="/login">Login</a>
                    </Form>
                </div>
            </div>
        </>
    )
}
