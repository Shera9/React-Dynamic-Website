import { style } from '@mui/system';
import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CompA from './CompA';

const Home = () => {
    const location = useLocation();
    // const history = useNavigate();
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    // const [subInput, setSubInput] = useState();
    const inputHandler = (event) =>{
        setInput(event.target.value);
    }
    const submitInput = () =>{
        navigate("/about", {state:{ name : input }});
        
    }

    // const DeleteItem = (e) =>{
    // if(  e.target.id === `myName`){
    //   localStorage.removeItem('name');  
    // }
    // if(e.target.id === 'age'){
    //   localStorage.removeItem("age")
    // }
    // if(e.target.id === "program"){
    //   localStorage.removeItem("program") 
    // }
    // }
    let nameIs = localStorage.getItem("name");
    
    const NavigateHome = () =>{
      navigate("/update", {state : {nameIs}})
    }
    // const goToNextPage = () =>{
    //     navigate("/about")
    // }

    
    let ageIs = localStorage.getItem("age");
    let progIs = localStorage.getItem("program");
    
    const[list, setList] = useState([
    {
      name : nameIs,
      age : ageIs,
      program : progIs
    }
  ])

    // const [initialName, setInitialName] = useState(nameIs);
    // const [initialAge, setInitialAge] = useState(ageIs);
    // const [initialProgram, setInitialProgram] = useState(progIs);
  
    const HomeFunction = () =>{
        return(<div> 
        
        <p className='text-center my-4 lead' id='myName'>Your Name is: {nameIs}</p>
        <p className='text-center my-4 lead' id='age'>Your Age is: {ageIs} </p>
        <p className='text-center my-4 lead' id='program'>Your Program is: {progIs} <br/><button className='my-4' onClick={() =>{navigate("/update")}}>Update</button> <button onClick={() =>{
          localStorage.clear();
          setList([]);
        }}>Delete</button> </p>        
        </div>); 
    }
    // const goHome = () => {
    //      history.push({
    //     pathname: '/about',
    //     setSubInput(input)
    //      })
    //   }

   
  return (
    <div>
    {/* <button className='float-end' onClick={goToNextPage}>Next Page</button> */}
      <h1 className='text-center'>This is a Home Page.</h1>
      {location.state !== null ? <HomeFunction/> : ""}
      <label htmlFor='input' value="Enter">Enter Your Name 👉</label>
      <input type='text' id='input' placeholder="Name" onChange={inputHandler} value={input}/>
      <button onClick={submitInput} className="mx-2">Submit</button> 
    </div>
  )
}
export default Home;