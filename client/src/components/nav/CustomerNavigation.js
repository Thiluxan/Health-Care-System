import React from 'react'
import UserLogo from '../../assets/user.png'
import { Figure,Button } from 'react-bootstrap'

export default function () {
    return (
        <div className="navigator">
            <Figure style={{marginLeft:'20px',marginTop:'40px'}}>
                        <Figure.Image
                            src={UserLogo}
                            alt="User Logo"
                            height={200}
                            width={200}
                            className="p-10"
                        />
            </Figure>
            <div style={{marginLeft:'27px',marginTop:'50px'}}>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Home
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Bookings
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    History
                </Button><br/>
                <Button href="#" variant="primary" size="lg" className="m-3 w-75">
                    Contact
                </Button>
            </div>
        </div>
    )
}
