import React from 'react'
import {Spinner} from 'react-bootstrap'
import authService from '../../authentication/auth-service'

export default function Loading() {
    const currentUser = authService.getCurrentUser()
    if(currentUser == null){
        window.location.replace("/login")
    }
    else if(currentUser.role === 'ADMIN'){
        window.location.replace("/admin/appointments")
    }
    else if(currentUser.role === 'CUSTOMER'){
        window.location.replace("/customer/home")
    }
    else if(currentUser.role === 'DOCTOR'){
        window.location.replace("/doctor/home")
    }
    return (
        <div>
            <Spinner animation="border" role="status" style={{margin:'300px',marginLeft:'700px'}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
