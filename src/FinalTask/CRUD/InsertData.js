
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Components/Sidebar.css";
import { SketchPicker  } from 'react-color'
import { insertInput   } from '../../ReduxToolKit/ActionReducer/InsertData'
import axios from 'axios';

const InsertData = () => {

    const navigate = useNavigate();
    const [addPost, setAddPost] = useState({
      title : "",
      description : "",
      type : ""
    })

    const addChangeHandler = (e) =>{
      setAddPost({
        ...addPost,
        [e.target.name] : e.target.value
      })
    }
    const insertDataHandler = async (e) =>{
           e.preventDefault();
           try{
           await axios.post(`http://localhost:3001/posts`, addPost)
          }
          
          catch(err){
             console.log('Something Wrong!')
          }
          navigate('/full-nav/show-data')
    }
    // const dispatch = useDispatch();
    // const [bgColor, setBgColor] = useState('');
    // const data = useSelector(store => store.insertData)
    // const [insert, setInsert] = useState()
    // const insertDataHandler = (e) =>{
    //     e.preventDefault();
    //     console.log("clicked")
       
    //               dispatch(insertInput({
    //     id : new Date().getTime().toString(),
    //      title : insert.title,
    //      desc : insert.desc,
    //      selectValue : insert.selectValue,
    //      selectType : insert.selectType,
    //      bgColor : bgColor
    //  }))
    //  navigate("/full-nav/show-data")
            // }
            // else{
            //     alert("Post Id already in use");
            //     return
            // }
            
        // })
  
     
    // }

  return (
    <div>
      <div className="container mt-3 " >
      <h1 className="fs-4 text-center">Insert Data</h1>
        <div className="insert-form">
          <form className="w-75 m-auto">
            <div className="mb-3">
              <label for="title" className="form-label">
                Enter Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name ='title'
                placeholder="Enter Title"
                onChange={(e) =>addChangeHandler(e)}
                // onChange={(e)=>setInsert({...insert, title :e.target.value})}
             

              />
            </div>
            <div className="mb-3">
              <label for="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                onChange={(e) =>addChangeHandler(e)}
                // onChange={(e)=>setInsert({...insert, desc :e.target.value})}
                rows="3"
                ></textarea>
            </div>
            {/* <div className="col-md-3">
              <label for="post-type" className="form-label">
                Post NO
              </label>
              <select className="form-select" id="post-type" required
              
              onChange={(e)=>setInsert({...insert, selectValue :e.target.value})}
              
              >
                <option selected disabled >
                  Choose post number...
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
              </select>
            </div> */}
            <div className="col-md-3 mt-3">
              <label for="post-type" className="form-label">
                Post Type
              </label>
              <input type='text' name ='type'  required
              onChange={(e) =>addChangeHandler(e)} />
             </div>
             
                {/* <option selected disabled >
                  Choose post type... */}
                {/* </option>
                <option value='Facebook'>Facebook</option>
                <option value='Instagram'>Instagram</option>
                <option value='Twitter'>Twitter</option>
                <option value='Whatsapp'>Whatsapp</option>
                <option value='Youtube'>Youtube</option>
                <option value='Google'>Google</option>
                <option value='Daily'>Daily</option>
                <option value='Weekend'>Weekend</option>
              </select> */}
            {/* </div> */}
            {/* <div className="mt-4">
            <label for="post-type" className="form-label">
               Choose Background Color
              </label>
              <SketchPicker 
              color={bgColor}
               onChange={(e)=>setBgColor(e.hex)}
                
              />
            </div> */}
            <div>
              <button className="mt-4 add-btn" onClick={(e) =>insertDataHandler(e)}>Add</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default InsertData;
