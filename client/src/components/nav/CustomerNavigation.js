import React from 'react'
import UserLogo from '../../assets/user.png'
import { Figure,Button } from 'react-bootstrap'

export default function CustomerNavigation({name}) {
    return (
        <div className="navigator" style={{height:'830px'}}>
            <Figure style={{marginLeft:'20px',marginTop:'40px'}}>
                        <Figure.Image
                            src={UserLogo}
                            alt="User Logo"
                            height={200}
                            width={200}
                            className="p-10"
                        />
            </Figure>
            <h3 style={{marginLeft:'50px',color:'white'}}>{name}</h3>
            <div style={{marginLeft:'27px',marginTop:'50px'}}>
                <Button href="/customer/home" variant="primary" size="lg" className="m-3 w-75">
                    Home
                </Button><br/>
                <Button href="/customer/bookings" variant="primary" size="lg" className="m-3 w-75">
                    Bookings
                </Button><br/>
                <Button href="/customer/history" variant="primary" size="lg" className="m-3 w-75">
                    History
                </Button><br/>
                <Button href="/customer/contact" variant="primary" size="lg" className="m-3 w-75">
                    Contact
                </Button>
            </div>
        </div>
    )
}
