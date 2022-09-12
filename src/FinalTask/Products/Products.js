import React, { useState } from "react";
import "../../index.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../ReduxToolKit/ActionReducer/insertProducts";
import { addPrice } from "../../ReduxToolKit/ActionReducer/insertPrice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [click, setClick] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [input, setInput] = useState();
  const [showFocus, setShowFocus] = useState(false)
  const [focusIndex, setFocusIndex] = useState();

  const dispatch = useDispatch();
  const product = useSelector((store) => store.insertProducts);
  console.log(product)
  const [showData, setShowData] = useState(false);
  const navigate = useNavigate();

  const ShowDropdown = () => {
    setClick(true);
    setToggleBtn(true);
  };
  const HideDropdown = () => {
    setClick(false);
    setToggleBtn(false);
  };
  const AddProducts = () => {
    
       toast.success("Product Added successfully!",{
      position : 'top-center',
      autoClose: 2000,
      theme : "colored"
    })
  
      // if(input.category !== "" && input.pName !== ""){
       dispatch(
      addProducts({
        id : new Date().getTime().toString(),
        category: input.category,
        pName: input.pName,
        
      }),
     
    );  
    
    // toast("Product Added Successfully!"); 
      // }
      // else{
      //     alert("Select from the products");
      //     return;
      // }
    
    setShowData(true);
    setClick(false);
    setToggleBtn(false);
  };

  const ShowFocusBtn = (index) =>{
      
         
              setShowFocus(true) 
        
    
      setFocusIndex(index);
  }
 const PricesHandler = (id) =>{
  const proId = product.find(pro => pro.id === id)
     dispatch(addPrice({
         
        id : proId,
          category :proId.category,
        pName: proId.pName,
        price : input.price,
        quantity : input.quantity,
        discount : input.discount
     }))
     navigate('/full-nav/discount') 
 }

  return (
    <div className="container">
    <h1 className='fs-4 text-center my-3 fw-normal'>Add Products</h1>
      {!toggleBtn ? (
        <div className="">
          <h4 className="fs-5">ADD</h4>{" "}
          <button
            className="bg-btn text-primary border border-0"
            onClick={ShowDropdown}>
            <AddBoxIcon className="fs-2 fw-bold" />
          </button>
        </div>
      ) : (
        <div className="mt-lg-5">
          <h4 className="fs-5">REMOVE</h4>
          <button
            className="bg-btn text-primary border border-0"
            onClick={HideDropdown}>
            <RemoveIcon className="fs-2" />
          </button>
        </div>
      )}

      {click ? (
        <div className="d-flex justify-content-evenly my-5 align-items-center">
          <div className="d-flex align-items-center">
            <label className="fs-6 text-secondary mx-2">Categories:</label>
            <select
              className="form-select"
              id="post-type"
              required
              style={{ width: "200px" }}
              onChange={(e) =>
                setInput({ ...input, category: e.target.value })
              }>
              
              <option selected disabled >
                Product Categories...
              </option>
              <option value="Telecom">Telecom</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothes">Clothes</option>
              <option value="Furnitures">Furnitures</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Courses">Courses</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <label className="fs-6 text-secondary mx-2 ">
              Product Name: 
            </label>
            <select
              className="form-select"
              id="post-type"
              required
              style={{ width: "200px" }}
              onChange={(e) => setInput({ ...input, pName: e.target.value })}>
              <option selected disabled>
                Product Names...
              </option>
              <option value="Mobile Phone">Mobile Phone</option>
              <option value="AC">AC</option>
              <option value="Pant">Pant</option>
              <option value="Chairs">Chairs</option>
              <option value="Lady finger">Lady finger</option>
              <option value="Sun block">Sun block</option>
              <option value="JAVA">JAVA</option>
              <option value="Car">Car</option>
            </select>
          </div>
          <div>
          <button className="product-add" onClick={AddProducts}>
            Add
          </button>
         
          </div>
        </div>
      ) : (
        ""
      )}
      
     <div className="row d-flex justify-content-center align-items-center mt-lg-4">
      {
        product.length ?
       
    <>
       <div className="col-3">
           <h2 className="fs-6 text-center">Product Category</h2>
          
       </div>
       <div className="col-2">
           <h2 className="fs-6 text-center">Product Name</h2>
           
       </div>
       <div className="col-2">
           <h2 className="fs-6 text-center">Price</h2>
       </div>
       <div className="col-2">
           <h2 className="fs-6 text-center">Quantity</h2>
       </div>
       <div className="col-2">
           <h2 className="fs-6 text-center">Discount(%)</h2>
       </div>
       <div className="col-1">
           <h2 className="fs-6 text-center">Purchase</h2>
       </div>
       
          </>  
       :
       <p className="text-center">Products are not added yet.</p>
    
      }
      { product.map((prod, index) => {
                return (
                  <div className="row d-flex justify-content-between align-items-center g-lg-3">
                    
                        <div className="col-3">
                            
                            <h4 className="fs-6 text-secondary text-center">{prod.category}</h4>
                        </div>
                        <div className="col-2">
                          
                            <h4 className="fs-6 text-secondary text-center">{prod.pName}</h4>
                        </div>
                        <div className="col-2 text-center">
                        {/* {
                            priceVal ?   */}
                             <input type='number' style={{width:"70px"}}
                         onChange={(e) => setInput({ ...input, price: e.target.value })}
                         onFocus={()=>ShowFocusBtn(index)}
                        //  value={prod.price}
                            />
                            {/* : 
                           <p>{focusIndex=== index ? input.price : ""}</p>
                        } */}
                          
                        </div>
                        <div className="col-2 text-center">
                        <input type='number' size='10' style={{width:"70px"}}
                        onChange={(e) => setInput({ ...input, quantity: e.target.value })}
                        onFocus={(e) =>ShowFocusBtn(e,index)}
                        value={prod.quantity}
                        />
                        </div>
                        <div className="col-2 text-center">
                        <input type='number' style={{width:"70px"}}
                        onChange={(e) => setInput({ ...input, discount: e.target.value })}
                        onFocus={(e) =>ShowFocusBtn(e,index)}
                        // value={prod.discount}
                        />
                        </div>
                        <div className="col-1 text-center">
                    <button onClick={()=>PricesHandler(prod.id)} className='border border-0 buy-btn'>Buy</button>
                  </div>
                  </div>
                );
              })
           
            }
       </div>
                  
         
            
       <ToastContainer/>
      </div>
   
  );
};

export default Products;
