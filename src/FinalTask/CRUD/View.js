import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

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
  return (
    <div className='container'>
    <h4 className='text-center mt-3 text-decoration-underline'>Post Details</h4>
      <table class="table text-center mt-3">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id}</th>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.type}</td>
    </tr>
  </tbody>
</table>
<button className='border border-0 rounded btn-primary' onClick={() => navigate('/full-nav/show-data')}>Back</button>
    </div>
  )
}

export default View
