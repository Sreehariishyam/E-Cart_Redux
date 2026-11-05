import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div style={{height:"50vh"}} className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
      <div className='row'>
        <div className="col-lg-8 border shadow">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sunscreen</td>
                <td><img width={"50px"} height={"50px"} src="https://img.magnific.com/free-vector/green-glass-jar-plastic-tube_88138-3.jpg?semt=ais_hybrid&w=740&q=80" alt="no image" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"40px"}} value={10} type="text" className='form-control' readOnly/>
                    <button className='btn fs-1'>+</button>
                  </div>
                </td>
                <td>$ 30</td>
                <td className='text-danger fs-1 fw-bold'>X</td>
              </tr>
            </tbody>
          </table>
          <div className='float-end p-3'>
            <button className='btn btn-danger'>EMPTY CART</button>
            <Link to={"/"} className='btn btn-info ms-5'>SHOP MORE</Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='border shadow p-5 rounded'>
            <h3>Total Amount : <span className='text-danger'>$ 300</span></h3>
            <hr />
            <button className='btn btn-success w-75'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
