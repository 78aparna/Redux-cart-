import React, { useEffect } from 'react'
import Header from "../components/Header";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';

function Home() {
  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  //console.log(allProducts);
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  return (
    <>
      <Header/>
      <div className='container py-5'>
        {
          loading?
          <div className='text-center my-5 fw-bolder fs-5'><img width="100px" className='me-2' src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="load" />Loading....</div>
          :<div className="row my-5">
          {/*duplicate */}
          {
            allProducts?.length>0?
            allProducts?.map(product=>(
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
        </div>
        }
        </div>
      
    </>
  )
}

export default Home
