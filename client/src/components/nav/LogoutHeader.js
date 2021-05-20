import React from 'react'
import { Navbar,Button } from 'react-bootstrap'

export default function LogoutHeader() {
    const handleLogout = () => {
        console.log("Logout")
    }
    return (
        <Navbar style={{padding:'25px'}}>
            <Navbar.Brand href="/home" style={{fontFamily:'cursive',fontSize:'35px',marginRight:'600px'}}>Alpha Health Care</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{fontFamily:'monospace',fontSize:'20px'}}>
                    <Navbar.Text className="mr-5">
                       <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
    )
}
