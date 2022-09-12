import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { deleteUser,editUser } from '../../ReduxToolKit/ActionReducer/AddUser';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios'

const UserProfile = () => {

  const {id} = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const userName = localStorage.getItem("user");
  useEffect(() =>{
      fetchData();
    },[id]);
  
    const fetchData = async () =>{
      try{
        const post = await axios.get(`http://localhost:3001/profile`)
        setUsers(post.data);
      }
      
      catch(err){
         console.log('Something Wrong!')
      }
    }
    const deleteHandler = async id =>{
      await axios.delete(`http://localhost:3001/profile/${id}`);
      const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }
    // const list = useSelector(store => store.users);
    // const dispatch = useDispatch();
    // console.log(list)
    // const deleteUserHandler = (id) => {
    //     dispatch(deleteUser({id}))
    //   }
    //   const params = useParams();
    //   const editUserHandler = (id, name, email, phone, age, password) =>{
    //     dispatch(editUser({id, name, email,phone, age,password}))
    //   }
  return (
    <div className='container'>
    <h3 className='text-center fs-4 mt-3 text-success'>Login User</h3>
    <div className='row d-flex justify-content-center'>
    <table class="table text-center mt-3">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col">Password</th>
      <th scope="col" colSpan={2}>Edit</th>
     
    </tr>
  </thead>
{
         users.map((user, i) =>{
           if(user.name === userName)
           return(
  <tbody key={i}>
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.age}</td>
      <td>{user.password}</td>
      
            <td>
            <Link to={`/edit-user/${user.id}`}>
              <button className='border border-0 bg-transparent text-primary'><EditIcon/></button>
           </Link>
            </td>
            {/* <td>
              <button className='border border-0 bg-transparent text-danger' onClick={() => deleteHandler(user.id)}><DeleteForeverIcon/></button>
            </td> */}
    </tr>
  </tbody>

    
)
         })
       }
      </table> 
       {/* {
        users.map( (user, index) => {
          return(
            
            <div key={index} className = "col-10 justify-content-center my-3 text-center py-3" style={{backgroundColor:"#BCD6EB", borderRadius:"10px",boxShadow: "3px 3px 2px #68ABAA"}}>
            <h1 className='text-primary text-center'>User</h1>
            <h3 className='text-success px-2 fw-bolder'>Name : {user.name}</h3>
            <p className='text-success lead'>Email : {user.email}</p>
            <p className='text-success fw-bold'>Phone : {user.phone}</p>
            <p className='text-success fw-bold'>Age : {user.age}</p>
            <p className='text-success fw-bold'>Password : {user.password}</p> */}
            {/* <div>
            <button onClick={() => deleteUserHandler(user.id)} className = " btn-danger mx-1 rounded">Delete</button>
            <Link to={`/edit-user/${user.id}`}>
            <button onClick={() => editUserHandler(user.id, user.name, user.email, user.phone, user.age, user.password)} className = " btn-primary rounded">Edit</button>
            </Link>
            </div> */}
           
            {/* </div> */}
          {/* )
        })
      } */}
     
    </div>
     <Outlet/>
    </div>
  )
}

export default UserProfile
