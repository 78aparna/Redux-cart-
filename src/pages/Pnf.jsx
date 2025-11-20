import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className="fw-bolder">404!</h1>
      <img width={'25%'} src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/CodePen-404-Page.gif" alt="pnf" />
      <h4>Look like you'r lost</h4>
      <p>The page your looking is not available</p>
       <Link to={'/'} className='btn btn-success'>Back to Home</Link>
    </div>
  )
}

export default Pnf
