import React,{useState} from 'react'
import TopNavigation from '../nav/TopNavigation'
import HealthHome from '../../assets/health_home.png'
import {Figure,Form,Button} from 'react-bootstrap'
import authService from '../../authentication/auth-service'

export default function Login() {
    const currentUser = authService.getCurrentUser()
    if(currentUser != null){
        window.location.replace('/loading')
    }
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[message,setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        authService.login(email,password)
        .then(response => {
            window.location.replace("/loading")
            setEmail('')
            setPassword('')
        })
        .catch(err => {
            console.log(err)
            setMessage('Invalid Credentials')
        })
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
                        <h2 style={{textAlign:'center',marginBottom:'15px'}}>Login Here</h2>
                        <span style={{marginTop:'-25px',color:'red',textAlign:'center',marginLeft:'90px'}}>{message}</span>
                        <Form.Group controlId="formBasicEmail" className="formGroups">
                            <Form.Label column="lg" lg={2}>Email </Form.Label>
                            <Form.Control 
                                size="lg"
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="lg" lg={2}>Password</Form.Label>
                            <Form.Control 
                                size="lg"
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                                required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg" style={{width:'300px',marginTop:'30px'}}>
                            Login
                        </Button><br/><br/>
                        Don't Have an Account ? <a href="/signup">Register</a>
                    </Form>
                </div>
            </div>
        </>
    )
}
