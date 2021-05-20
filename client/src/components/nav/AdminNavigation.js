import React from 'react'
import AdminLogo from '../../assets/admin1.png'
import { Figure,Button } from 'react-bootstrap'

export default function AdminNavigation() {
    return (
        <div className="navigator">
            <Figure style={{marginLeft:'30px',marginTop:'50px'}}>
                        <Figure.Image
                            src={AdminLogo}
                            alt="Admin Logo"
                            height={200}
                            width={200}
                            className="p-10"
                        />
            </Figure>
            <div style={{marginLeft:'20px',marginTop:'40px'}}>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Patients
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Doctors
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Appointments
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Doctor Visits
                </Button>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Admins
                </Button>
            </div>
        </div>
    )
}
