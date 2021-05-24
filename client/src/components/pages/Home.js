import React from 'react'
import TopNavigation from '../nav/TopNavigation'
import HealthHome from '../../assets/health_home.png'
import {Figure} from 'react-bootstrap'

export default function Home() {
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
                    <h1 style={{marginTop:"200px",marginRight:'150px'}}>Welcome to Alpha Health Care</h1>
                </div>
            </div>
        </>
    )
}
