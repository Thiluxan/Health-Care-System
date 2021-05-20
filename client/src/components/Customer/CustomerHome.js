import React,{useState} from 'react'
import LogoutHeader from '../nav/LogoutHeader'
import { Form,Button,Card} from 'react-bootstrap'
import CustomerNavigation from '../nav/CustomerNavigation'

export default function CustomerHome() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[query,setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Visit created")
    }
    return (
        <>
            <div style={{float:'left'}}>
                <CustomerNavigation/>
            </div>
            <div style={{float:'right',marginRight:"100px"}}>
                <LogoutHeader/>
                <div style={{marginTop:'0px',display:'flex',flexWrap:'wrap'}}>
                    <Card style={{ width: '18rem',marginRight:'80px' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',marginRight:'80px' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',marginRight:'80px' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                                      
                    
                </div>   
            </div>
        </>
    )
}
