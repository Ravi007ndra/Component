import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CommunityCard from './CommunityCard'

export default function Community() {
    return (
        <Container fluid className='px-md-5'>
            <div className='d-flex justify-content-between align-itmes-center'>
                <h1 className='fs-80'>CHECK OUR COMMUNITY.</h1>
                <Button className='bg-transparent d-flex justify-content-center align-items-center'>
                    View Community
                    <svg className='ms-1' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7493 12.5002C14.7443 11.9521 14.5235 11.4282 14.1348 11.0418L9.66602 6.56267C9.47085 6.36866 9.20683 6.25977 8.93164 6.25977C8.65645 6.25977 8.39244 6.36866 8.19727 6.56267C8.09963 6.65951 8.02214 6.77472 7.96925 6.90166C7.91637 7.02859 7.88914 7.16475 7.88914 7.30226C7.88914 7.43977 7.91637 7.57592 7.96925 7.70286C8.02214 7.8298 8.09963 7.945 8.19727 8.04184L11.6243 11.4585H1.20768C0.931415 11.4585 0.666463 11.5683 0.471113 11.7636C0.275763 11.959 0.166016 12.2239 0.166016 12.5002C0.166016 12.7764 0.275763 13.0414 0.471113 13.2367C0.666463 13.4321 0.931415 13.5418 1.20768 13.5418H11.6243L8.19727 16.9689C8.00112 17.1637 7.89037 17.4284 7.8894 17.7048C7.88842 17.9812 7.99729 18.2467 8.19206 18.4429C8.38683 18.639 8.65154 18.7498 8.92796 18.7508C9.20438 18.7517 9.46987 18.6429 9.66602 18.4481L14.1348 13.9689C14.526 13.58 14.747 13.0518 14.7493 12.5002Z" fill="white" />
                    </svg>
                </Button>
            </div>
            <div className='mt-5'>
                <Row className='g-5'>
                    <Col xl={3} md={6}>
                        <CommunityCard />
                    </Col>
                    <Col xl={3} md={6}>
                        <CommunityCard />
                    </Col>
                    <Col xl={3} md={6}>
                        <CommunityCard />
                    </Col>
                    <Col xl={3} md={6}>
                        <CommunityCard />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
