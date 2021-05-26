import React from 'react'
import AdminLogo from '../../assets/admin1.png'
import { Figure,Button } from 'react-bootstrap'

export default function AdminNavigation({name}) {
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
            <h3 style={{marginLeft:'70px',color:'white'}}>{name}</h3>
            <div style={{marginLeft:'20px',marginTop:'20px'}}>
                <Button href="/admin/patients" variant="primary" size="lg" className="m-3 w-75">
                    Patients
                </Button><br/>
                <Button href="/admin/doctors" variant="primary" size="lg" className="m-3 w-75">
                    Doctors
                </Button><br/>
                <Button href="/admin/appointments" variant="primary" size="lg" className="m-3 w-75">
                    Appointments
                </Button><br/>
                <Button href="/admin/doctorVisits" variant="primary" size="lg" className="m-3 w-75">
                    Doctor Visits
                </Button>
                <Button href="/admin/admins" variant="primary" size="lg" className="m-3 w-75">
                    Admins
                </Button>
            </div>
        </div>
    )
}
