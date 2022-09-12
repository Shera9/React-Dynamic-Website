import React, { useState } from "react";
import { NavDropdown, Dropdown, Nav, Navbar } from "react-bootstrap";

const NestedProgram = () => {
  const uniData = [
    {
      id: "a",
      uniName: "COMSATS",
      departments: [
        {
          department: "BSSE",
          Students: [
            {
              id: 1,
              stdName: "Wahid",
              age: 22,
              subjects: ["Bio ", "Chemistry"],
            },
            {
              id: 2,
              stdName: "Noor",
              age: 21,
              subjects: ["Bio", "Physics"],
            },
          ],
        },
        {
          department: "BSCS",
          Students: [
            {
              id: 1,
              stdName: "Wajid",
              age: 22,
              subjects: ["Computer", "Chemistry"],
            },
            {
              id: 2,
              stdName: "Zahoor",
              age: 21,
              subjects: ["English", "Physics"],
            },
          ],
        },
        {
          department: "BSIT",
          Students: [
            {
              id: 1,
              stdName: "Nawaz",
              age: 22,
              subjects: ["Politics", "Chemistry"],
            },
            {
              id: 2,
              stdName: "Imran",
              age: 21,
              subjects: ["Liar", "Physics"],
            },
          ],
        },
      ],
    },
    {
      id: "b",
      uniName: "Nust",
      departments: [
        {
          department: "BSCE",
          Students: [
            {
              id: 1,
              stdName: "Farman",
              age: 12,
              subjects: ["Testology", "Biography"],
            },
            {
              id: 2,
              stdName: "Shah",
              age: 14,
              subjects: ["Urdu", "Islamiat"],
            },
          ],
        },
        {
          department: "BSEE",
          Students: [
            {
              id: 1,
              stdName: "Abdul",
              age: 34,
              subjects: ["System", "Networking"],
            },
            {
              id: 2,
              stdName: "Mahnoor",
              age: 32,
              subjects: ["ACCA", "CCA"],
            },
          ],
        },
        {
          department: "BSE",
          Students: [
            {
              id: 1,
              stdName: "Nawaz",
              age: 45,
              subjects: ["Politics ", "Chemistry"],
            },
            {
              id: 2,
              stdName: "Imran",
              age: 87,
              subjects: ["Liar", "Physics"],
            },
          ],
        },
      ],
    },
  ];

  const [uniNameBe, setUniNameBe] = useState(uniData);

  const [click, setClick] = useState(false);
  const [deptClick, setDeptClick] = useState(false);

  const ShowDepartments = (uniName) => {
    //   setDeptClick(true);
       return uniData.map(data =>  data.departments.map((dept, index) =>{
                               return (
                                   <div key={index}>
                                   <button>{dept.department}</button>
                                   </div>
                               )
        }) )

  };

  const ShowPrograms = (nameUni) => {
    setClick(true);
    return uniData.map(
      (nameofUni, index) => {
        return (
          <div key={index}>
            {/* <h1  className ="my-4 fs-6 ms-auto">{nameofUni.uniName}</h1> */}
            <button
              className="btn-md btn-primary my-2 border-zero"
              onClick={() =>ShowDepartments(nameofUni.uniName)}>
              {nameofUni.uniName}
            </button>
          </div>
        );
      },
      //  }
    );
  };

  //    const data = () =>{

  //   let zayaTime = uniNameBe.map(data => data.departments.map((val, index) =>
  //                    console.log()
  //                ))
  // }

  return (
    <div>
      <h5 className="text-secondary">Choose the University Name Below!</h5>
      <button
        onClick={ShowPrograms}
        className="btn-lg d-flex flex-row my-3 mx-3 border-zero btn-success">
        Show Universities
      </button>

      {/* {item.departments.map((subitem,index)=>{
    return(<div>
    <h1 key={index} className="ps-2">{subitem.department}</h1>
    {subitem.Students.map((nesteditem,index)=>{
    return(
<div key={index}>


    <h1  className="ps-5">{nesteditem.stdName}</h1>
    <h1  className="ps-5">{nesteditem.subjects + " "}</h1>


    </div>
    )
    })}
    </div>)
    })} */}

      {click ? <ShowPrograms /> : ""}
      <ShowDepartments/> 

      {/* <h5 className='text-secondary'>Choose the University Name Below!</h5>
<Nav>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Universities"
          menuVariant="dark"
        >
{uniData.map((data, index) =>

          <NavDropdown.Item key ={index} onClick={() =>ShowPrograms(data.uniName)} className='btn-lg d-flex flex-row my-2 mx-3'>
          {data.uniName}</NavDropdown.Item>
      )
      
    }
  </NavDropdown>
      </Nav>
     
{click ?  <div ><h4 className='text-center'>University Name is : {uniNameBe} </h4> 
                   <br/>
                   <h6 className='text-success'>Choose Programs</h6>
                   
                   <Nav>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Programs"
          menuVariant="dark"
        >
       <ShowPrograms/>
       {/* <NavDropdown.Item className='btn-lg d-flex flex-row my-2 mx-3'>{uniNameBe}</NavDropdown.Item> */}
      {/* <>{uniProg.map((prog, index) =>
          <NavDropdown.Item key ={index} onClick={() => ShowPrograms()} className='btn-lg d-flex flex-row my-2 mx-3'>{prog.program}</NavDropdown.Item>
         )} </> */}
    </div>
  );
};

export default NestedProgram;
