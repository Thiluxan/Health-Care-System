import React from 'react'
import DoctorLogo from '../../assets/doctor.png'
import { Figure,Button } from 'react-bootstrap'

export default function DoctorNavigation() {
    return (
        <div className="navigator">
            <Figure style={{marginLeft:'30px',marginTop:'50px'}}>
                        <Figure.Image
                            src={DoctorLogo}
                            alt="Doctor Logo"
                            height={200}
                            width={200}
                            className="p-10"
                        />
            </Figure>
            <div style={{marginLeft:'20px',marginTop:'40px'}}>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Home
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Appointments
                </Button>
            </div>
        </div>
    )
}
