import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteInsert, editInsertInput } from '../../ReduxToolKit/ActionReducer/InsertData'
import '../Components/Sidebar.css';
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Data = () => {
   
  const [post, setPost] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    try{
      const posts = await axios.get(`http://localhost:3001/posts`)
      setPost(posts.data);
    }
    
    catch(err){
       console.log('Something Wrong!')
    }
  }
  const deleteHandler = async id =>{
    await axios.delete(`http://localhost:3001/posts/${id}`);
    const newPosts = post.filter(item => item.id !== id)
    setPost(newPosts)
  }

    // const data = useSelector(store => store.insertData);
    
    // const [item, setItem] = useState(data)
    // const [searchItem, setSearchItem] = useState('')
    
    // const dispatch = useDispatch();
    // const editInsertInputHandler = (id, title, desc, selectValue, selectType,bgColor) =>{
    //     dispatch(editInsertInput({
    //         id,
    //         title,
    //         desc,
    //         selectValue,
    //         selectType,
    //         bgColor
    //     }))
    // }
   
  
    // const DeleteInsertData = (id) =>{
    //     dispatch(deleteInsert(id))
    //    const dlt = item.filter(ele => ele.id !== id);
    //    setItem(dlt)
    // }

    // const filterItems = (e) =>{
    //   const keyword = e.target.value;
    //   if (keyword !== '') {
    //     const results = data.filter((item) => {
    //       return item.title.toLowerCase().startsWith(keyword.toLowerCase());
          
    //     });
    //     setItem(results);
        
    //   } 
    //   else{
    //     setItem(data);
      
    //   }
  
    //   setSearchItem(keyword);
    // }

    return(
    <div className='container insert '>
    
     <table class="table text-center mt-3">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col-3" colSpan={3}>Actions</th>
     
    </tr>
  </thead>
{
         post.map((items, i) =>{
           return(
  <tbody key={i}>
    <tr>
      <th scope="row">{items.id}</th>
      <td>{items.title}</td>
      <td>
            <Link to={`/full-nav/view/${items.id}`}>
              <button className='border border-0 bg-transparent text-info'><VisibilityIcon/></button></Link>
            </td>
            <td>
            <Link to={`/edit-insert/${items.id}`}>
              <button className='border border-0 bg-transparent text-primary'><EditIcon/></button>
           </Link>
            </td>
            <td>
              <button className='border border-0 bg-transparent text-danger' onClick={() => deleteHandler(items.id)}><DeleteForeverIcon/></button>
            </td>
    </tr>
  </tbody>

    
)
         })
       }
      </table>     
            {/* <div className='col-md col-lg-4' key={i}>
             <div className='d-flex justify-content-evenly align-items-center show-col'>
           <div className='text-white'>{`${i+1} -`}</div>
            <div className='mx-2 text-white'>
              <h3 className='fs-5'>{items.title}</h3>
            </div>
            
             </div>
             </div>
        
    

    </div> */}
    
 {/* <div className="input-group mb-4 me-auto">
  <div className="form-outline">
    <input type="search" id="form1" 
    placeholder="search..."
      onChange={(e)=>filterItems(e)}
      value ={searchItem}
    />
    
  </div>
</div>
    <div className="row d-flex g-4 justify-content-center">
       {item && item.length > 0 ?
         (item.map((ele) =>{
                return(
                        
          <div className="col-lg-3 card-bg mx-3" key={ele.id}
          style={{backgroundColor:`${ele.bgColor}`,
                 boxShadow : `3px 3px 3px ${ele.bgColor}`
          }}
          >
         
            <div className="post-number">
              <p className='fs-5'>Post NO : {ele.selectValue}</p>
            
            </div>
            <div className="title">
              <p className='fs-5'>Title : {ele.title}</p>
            </div>
            <div className="description">
              <p className='fs-5'>Description : <span style={{wordWrap:"break-word"}}>{ele.desc}</span></p>
            </div>
            <div className="Post-type pb-2">
              <h5 className='fs-5'>Post Type : {ele.selectType}</h5>
            </div>
            <div className="btn-div my-2 d-flex justify-content-evenly">
            
              <button className="border border-0 rounded btn-danger" style={{boxShadow:"2px 2px 2px red"}} onClick={()=>DeleteInsertData(ele.id)}>Delete</button>
              <Link to={`/edit-insert/${ele.id}`}>
              <button className=" border border-0 rounded btn-primary" style={{boxShadow:"2px 2px 2px blue"}} onClick={() => editInsertInputHandler(ele.id, ele.title, ele.desc, ele.selectValue, ele.selectType,ele.bgColor)}>Update</button>
            </Link>
            </div>
         
          </div>
        
                  
                )
            }))
            :
          (
            <h3 className='text-center my-5 text-secondary'>No record found!</h3>
          )          
        }
        </div> */}
       
    </div>
  )
}

export default Data
