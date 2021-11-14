import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Nav, Card, Row, Container,Col } from 'react-bootstrap';
export default function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/Products')
            .then(res => {
                setData(res.data)
            })
    }, [])
    return (
        <Container>
            <Container className="text-center bg-light"><h1>Product App</h1></Container>
            <Row md={4} >
                {data.map(pro =>
                    <Card border="dark" className="text-center" style={{ width: "40rem" }}>
                        <Card.Img variant="top" src={pro.images} height="250px" />
                        <Card.Body>
                            <Card.Title>{pro.pname}</Card.Title>
                            <Card.Text> ID:{pro.id}</Card.Text>
                            <Card.Text>Quantity:{pro.quantity}</Card.Text>
                            <Card.Text>Price:{pro.price}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Row>
        </Container>
    )
}

