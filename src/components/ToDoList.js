import { Add } from '@material-ui/icons'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

 const ToDoList = () => {
const [enteredItem, setEnteredItem] = useState("");
const [itemToAdd, setItemToAdd] = useState([]);

    const addItemEvent = (event) =>{
        setEnteredItem(event.target.value);
    }
    const addItemToListHandler = (event) =>{
        event.preventDefault();
        setItemToAdd(value =>{
        //    console.log(value);
            return [...value, enteredItem]
           
        })
         setEnteredItem("");
    }
    // const [line, setLine] = useState(false)
    // const LineThroughText = () =>{
    //    setLine((val, id)=>{
            
    //    })
    // }
  return (
    <>
      <h1>ToDoList</h1>
      <input type='text' value={enteredItem} placeholder='Enter an item!' onChange={addItemEvent}/>
      <Button onClick={addItemToListHandler}><Add/></Button>
      <ul>
      {itemToAdd.map((valEntered,index) =>{
         return (valEntered.trim().length > 0 ? <div key={index} style={{ listStyleType:"none",display:"flex"}}><DeleteIcon /><li className='text-success'>{valEntered}</li></div> : null) })
          }
          
      </ul>
    </>
  )
}
export default ToDoList;
