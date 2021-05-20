import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function TopNavigation() {
    return (
        <Navbar bg="dark" variant="dark" style={{padding:'25px'}}>
            <Navbar.Brand href="/home" style={{fontFamily:'cursive',fontSize:'35px'}}>Alpha Health Care</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{fontFamily:'monospace',fontSize:'20px'}}>
                    <Navbar.Text className="mr-5">
                        <a href="/login">Login</a>
                    </Navbar.Text>
                    <Navbar.Text className="mr-5">
                        <a href="/signup">Signup</a>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
    )
}
