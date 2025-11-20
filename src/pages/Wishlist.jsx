import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Wishlist() {
  return (
    <>
      <Header/>
      <div className='container py-5'>
        {/* wishlist with contents */}
        <div className="row my-5">
          <div className="col-md-3 mb-2">
            {/* card-react bootstrap */}
            <Card>
      <Card.Img height={'250px'} variant="top" src="https://pngimg.com/d/mascara_PNG104.png" />
      <Card.Body className='text-center'>
        <Card.Title>Title</Card.Title>
        <div className="d-flex justify-content-evenly my-1">
          <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
          <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>

        </div>
      </Card.Body>
    </Card>

          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
