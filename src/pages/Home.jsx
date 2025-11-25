import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  //console.log(allProducts);
  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts.length/productsPerPage)

  const pageItemLastIndex = currentPage * productsPerPage
  const pageItemStartIndex = pageItemLastIndex - productsPerPage
  const visibleProductArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  const navigateNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigatePreviousPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome={true}/>
      <div className='container py-5'>
        {
          loading?
          <div className='text-center my-5 fw-bolder fs-5'><img width="100px" className='me-2' src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="load" />Loading....</div>
          :<div className="row my-5">
          {/*duplicate */}
          {
            allProducts?.length>0?
            visibleProductArray?.map(product=>(
              <div key={product?.id} className="col-md-3 mb-2">

            
            
            {/* card-react bootstrap */}
            <Card>
      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title>{product?.title}</Card.Title>
        <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'>view more....</Link>
        
      </Card.Body>
    </Card>

          </div>
         ))
         :
         <p className='fs-5 fw-bolde my-5'>product not found!</p>
        }
        <div className="my-3 text-center">
          <button onClick={navigatePreviousPage} className="btn"><FontAwesomeIcon icon={faBackward}/></button>
          <p className='fw-bolder'>{currentPage} of {totalPages}</p>
          <button onClick={navigateNextPage} className="btn"><FontAwesomeIcon icon={faForward}/></button>
        </div>
        </div>
        }
        </div>
      
    </>
  )
}

export default Home
