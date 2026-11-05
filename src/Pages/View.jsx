
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function View() {
  return (
    <div className='container my-5'>
      <div style={{height:"80vh"}} className='row align-items-center'>
        <div className="col-lg-6 text-center">
          <img className='img-fluid' src="https://img.magnific.com/free-vector/green-glass-jar-plastic-tube_88138-3.jpg?semt=ais_hybrid&w=740&q=80" alt="product" />  
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'>ADD TO WISHLIST</button>      
            <button className='btn btn-success'>ADD TO CART</button>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$ 30</h2>
          <h4 className='fw-bold'>Brand :</h4>
          <h4 className='fw-bold'>Category :</h4>
          <h4 className='fw-bold'>Description :</h4>
          <h5 className='fw-bold'>Client Reviews</h5>
          <div className='border rounded p-2 shadow my-5'>
            <p><span className='fw-bolder'>Name :</span>Meassge</p>
            <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
