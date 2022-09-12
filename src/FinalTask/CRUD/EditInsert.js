import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editInsertInput  } from '../../ReduxToolKit/ActionReducer/InsertData'
import { SketchPicker  } from 'react-color'
import axios from 'axios'
const EditInsert = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [item, setItem] = useState({
      title : "",
      description : "",
      type : ""
    })

    const editChangeHandler = (e) =>{
      setItem({
        ...item,
        [e.target.name] : e.target.value
      })
    }
    const {id} = useParams()

    useEffect(() =>{
      fetchData();
    },[id]);
  
    const fetchData = async () =>{
      try{
        const post = await axios.get(`http://localhost:3001/posts/${id}`)
        setItem(post.data);
      }
      
      catch(err){
         console.log('Something Wrong!')
      }
    }

    const insertDataHandler = async (e) =>{
      e.preventDefault();
      try{
      await axios.put(`http://localhost:3001/posts/${id}`, item)
     }
     
     catch(err){
        console.log('Something Wrong!')
     }
     navigate('/full-nav/show-data')
}
  
  // const user = useSelector(store => store.insertData);
  // const selectedUser = user.filter( data => data.id === params.id);
  // const  {title, desc, selectValue, selectType,bgColor} = selectedUser[0];
  
  //   const [insertEdit, setInsertEdit] = useState({
  //      title,
  //      desc,
  //      selectValue,
  //      selectType ,
  //      bgColor
  //    } );
  //     const EditInsertHandler = (e) => {
  //         e.preventDefault();

  //       user.map((val) =>{
  //           if(val.selectValue !== insertEdit.selectValue){
  //                dispatch(editInsertInput({
  //              id : params.id,
  //              title : insertEdit.title,
  //              desc: insertEdit.desc,
  //              selectValue : insertEdit.selectValue,
  //              selectType : insertEdit.selectType,
  //              bgColor : insertEdit.bgColor
              
  //             }))
  //             navigate('/full-nav/show-data');
  //           }
  //           else{
  //               alert("selected id already in use.");
  //           }
  //       })
          
           
  //     }
  return (
    <div className='container p-2 my-3 w-75' style={{backgroundColor:"#e1bcff", borderRadius:"10px",boxShadow:"2px 2px 2px #e1bcff"}}>
    <h1 className='fs-4 text-center fw-bold'>Edit Items</h1>
    <div className='w-50 my-3 m-auto'>
    <label className='fw-bold'>Title:
      <input type='text'
       value={item.title}
       name='title'
       onChange ={(e) => editChangeHandler(e)}
      /></label> <br/>
       <div className="mb-3">
              <label for="description" className="form-label">
                Description
              </label>
              <textarea
                 name='description'
                className="form-control"
                id="description"
                onChange ={(e) => editChangeHandler(e)}
                rows="3"
                value={item.description}
                ></textarea>
                
            </div>
     <br/>
       {/* <div className="col-md-3">
              <label for="post-type" className="form-label">
                Post NO
              </label>
              <select className="form-select" id="post-type" required
              onChange={(e)=>setInsertEdit({...insertEdit, selectValue :e.target.value})}
              value={insertEdit.selectValue}
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
            <div className="col-md-3 my-4">
              <label for="post-type" className="form-label">
                Post Type
              </label>
              <input id="post-type" required
               onChange={(e)=>editChangeHandler(e)}
               value={item.type}
               name="type"
              />
                {/* <option selected disabled >
                  Choose post type...
                </option>
                <option value='Facebook'>Facebook</option>
                <option value='Instagram'>Instagram</option>
                <option value='Twitter'>Twitter</option>
                <option value='Whatsapp'>Whatsapp</option>
                <option value='Youtube'>Youtube</option>
                <option value='Google'>Google</option>
                <option value='Daily'>Daily</option>
                <option value='Weekend'>Weekend</option>
              </select> */}
            </div>
            {/* <div className="mt-4">
            <label for="post-type" className="form-label">
                Background Color
              </label>
              <SketchPicker 
              color={insertEdit.bgColor}
               onChange={(e)=>setInsertEdit({...insertEdit, bgColor :e.hex})}
                
              />
            </div> */}
      <br/>
      <button  className='btn-success fw-bold rounded ' onClick={(e) =>insertDataHandler(e)}>Save</button>
      </div>
      <button className='border border-0 rounded btn-primary' onClick={() => navigate('/full-nav/show-data')}>Back</button>
    </div>
  )
}

export default EditInsert
