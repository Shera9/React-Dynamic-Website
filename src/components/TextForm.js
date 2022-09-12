import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const upperCase = () =>{
      let newText = text.toUpperCase();
      setText(newText);
  }
  const lowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
}
const clearText = () =>{
    let newText = "";
    setText(newText);
}
  const updateText = (event) =>{
       setText(event.target.value);
  }
  return (
      <>
      <h1 className='text-secondary'>{props.heading}</h1>
    <textarea className="form-control" placeholder='Enter text here' value={text} onChange= {updateText} id="textUtils" rows="9">
    </textarea>
    <button className='btn btn-primary my-2 mx-1' onClick= {upperCase}>UpperCase</button>
    <button className='btn btn-primary my-2 mx-1' onClick= {lowerCase}>LowerCase</button>
    <button className='btn btn-primary my-2 mx-1' onClick= {clearText}>ClearText</button>
     <h2>Number of words and characters</h2>
     <p className='text-danger'>{text.split(" ").length} words and {text.length} characters</p>
     <h2>Preview</h2>
     <p>{text}</p>
  </>
  )
}
