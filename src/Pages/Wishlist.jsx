import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from'../Components/Header'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2'
import { addCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  const userCart = useSelector(state=>state.cartReducer)

  const handleCart = (product) => {
    // check the product alraedy in the cart
    const existingItem = userCart?.find(item=>item?.id==product?.id)
   dispatch(addCart(product))
   dispatch(removeWishlistItem(product.id))
   Swal.fire({
    title:"Success",
    text:existingItem? `${existingItem.title} Quantity incremented` : "Product added to your cart",
    icon:"Success",
    confirmButtonText:"Ok"
   })
  }

  return (
    <>
      <Header/>
      <div className='container my-5'>
        {userWishlist?.length>0 ?
       <>
          <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
           <div className="row pt-4">
                    {/* Duplicate coloum according to products */}
                    {
                      userWishlist?.map(item=>(                      
                      <div className="col-3">
                        {/* Cards */}
                        <Card className='shadow p-2'>
                            <Card.Img style={{height:"250px"}} variant="top" src={item?.thumbnail} />
                            <Card.Body className='text-center'>
                                <Card.Title>{item?.title}</Card.Title>
                                <div className='d-flex justify-content-evenly'>
                                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                                  <button onClick={()=>handleCart(item)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                      ))
                    }
                </div>
       </>
       :
       <div className='d-flex justify-content-center align-items-center flex-column'>
        <img className='img-fluid' src="https://p1.hiclipart.com/preview/658/470/455/krzp-dock-icons-v-1-2-empty-grey-empty-text-png-clipart.jpg" alt="" />
        <h1>Your Wishlist is Empty</h1>
        <Link to={'/'} className='btn btn-primary'>Add More</Link>

       </div>
      }
      </div>
    </>
  )
}

export default Wishlist
