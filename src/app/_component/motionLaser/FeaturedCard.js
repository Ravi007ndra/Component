import React from 'react'
import { Badge, Card } from 'react-bootstrap'

export default function FeaturedCard() {
    return (
        <Card style={{ background: 'none' }} className='h-100'>
            <Card.Body className='card-bg' style={{ borderRadius: '20px' }}>
                <a href='https://www.motionlasers.com/us/en/products/lasers/' className='text-decoration-none'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='text-white d-flex align-items-center'><Badge className='border bg-transparent me-1 border-light rounded-circle border-white'>1</Badge><p className='mb-0'>Entry Level</p></div>
                        <img src='/card_logo.svg' alt='maker logo' className='img-fluid' />
                    </div>
                    <div className='d-flex justify-content-center h-100 align-items-center'>
                        <img src='/product.png' alt='product image' className='img-fluid' />
                    </div>
                </a>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-between px-0'>
                <div>
                    <p className='text-white fs-18 mb-0'>Diode Series DS-2000RGB</p>
                    <p className='fs-14 mb-0'>club Series</p>
                </div>
                <p className='text-white fs-18 mb-0' >$7,080.00</p>
            </Card.Footer>
        </Card>
    )
}
