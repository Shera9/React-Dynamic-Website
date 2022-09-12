import React  from 'react'
import { useSelector } from 'react-redux';

const Discount = () => {
  
   const discountRecords = useSelector(store => store.insertPrice)

  return (
    <div>
    <div className='container'>
    <h1 className='fs-4 text-center text-muted text-decoration-underline my-3 pb-3'>Discount Product Details</h1>
    {
        discountRecords.length ?
         
         <div className='row d-flex justify-content-evenly align-items-center mt-lg-3'>
                     <div className='col-2'>
                      <h4 className='fs-6 fw-bolder text-center'>Product Category</h4>
                     </div>
                     <div className='col-3'>
                      <h4 className='fs-6 fw-bolder text-center'>Product Name</h4>
                     </div>
                     <div className='col-2'>
                      <h4 className='fs-6 fw-bolder text-center'>Total Price(RS)</h4>
                     </div>  
                     <div className='col-2'>
                      <h4 className='fs-6 fw-bolder text-center'>Discount(RS)</h4>
                     </div> 
                     <div className='col-2'>
                      <h4 className='fs-6 fw-bolder text-center'>Final Price(RS)</h4>
                     </div>
                     </div>
                      : <p className='text-center mt-lg-5'>No Products</p> 
    }
        
        {discountRecords.length ?
            discountRecords.map(disc =>{
                
                let disco = Math.ceil(disc.quantity*((disc.discount/100)*(disc.price)));
                let fPrice = disc.price*disc.quantity - disco;
               
                return(
                    <div className='row d-flex justify-content-evenly align-items-center mt-lg-3'>
                   <div className='col-2 border-0 border-end'>
                      <h4 className='fs-6 text-secondary fw-normal text-center'>{disc.category}</h4>
                     </div>
                     <div className='col-3 border-0 border-end'>
                      <h4 className='fs-6 text-secondary fw-normal text-center'>{disc.pName}</h4>
                     </div>
                     <div className='col-2 border-0 border-end'>
                      <h4 className='fs-6 text-secondary fw-normal text-center'>{(disc.price)*(disc.quantity)}</h4>
                     </div>  
                     <div className='col-2 border-0 border-end'>
                      <h4 className='fs-6 text-secondary fw-normal text-center'>{disco}</h4>
                     </div> 
                     <div className='col-2 border-0 border-end'>
                      <h4 className='fs-6 text-secondary fw-normal text-center'>{fPrice}</h4>
                     </div>    
                    </div>
                )
            })
            : 
            null
        }
           
        </div>
    </div>
    
  )
}

export default Discount
