import React from 'react'
import { Card } from 'react-bootstrap'

export default function CommunityCard() {
    return (
        <Card style={{ background: 'none' }} className='h-100'>
            <Card.Body className='community-card d-flex align-items-end' style={{ borderRadius: '20px' }}>
                <a href='https://www.motionlasers.com/us/en/products/lasers/' className='text-decoration-none'>
                    <p className='fs-32 text-white'>
                        How Motion Lasers Revolutionizes Event Lighting
                    </p>
                    <p className='text-primary fs-18'>
                        {/* add icon here */}
                        02.04.24
                    </p>
                </a>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-between align-items-center px-0 gap-3 mt-4'>
                <p className='text-white fs-18 mb-0'>From cutting-edge technology to unparalleled...</p>
                <a href='#'>
                    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5775 12.4998C28.5677 11.4256 28.1398 10.3987 27.3867 9.64142L18.7285 0.862257C18.3504 0.481995 17.8389 0.268555 17.3057 0.268555C16.7725 0.268555 16.261 0.481995 15.8828 0.862257C15.6936 1.05206 15.5435 1.27787 15.441 1.52666C15.3386 1.77546 15.2858 2.04232 15.2858 2.31184C15.2858 2.58136 15.3386 2.84822 15.441 3.09702C15.5435 3.34581 15.6936 3.57162 15.8828 3.76142L22.5228 10.4581H2.34049C1.80523 10.4581 1.29188 10.6732 0.913392 11.0561C0.5349 11.439 0.322266 11.9583 0.322266 12.4998C0.322266 13.0412 0.5349 13.5605 0.913392 13.9434C1.29188 14.3263 1.80523 14.5414 2.34049 14.5414H22.5228L15.8828 21.2585C15.5028 21.6403 15.2882 22.1591 15.2863 22.7009C15.2844 23.2427 15.4954 23.763 15.8727 24.1475C16.2501 24.5319 16.763 24.749 17.2985 24.7509C17.8341 24.7528 18.3485 24.5394 18.7285 24.1577L27.3867 15.3785C28.1447 14.6163 28.573 13.581 28.5775 12.4998Z" fill="#00B86B" />
                    </svg>
                </a>
            </Card.Footer>
        </Card>
    )
}
