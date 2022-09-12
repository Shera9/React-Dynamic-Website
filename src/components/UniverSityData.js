import React, { useState } from 'react'
import { Nav, Container ,NavDropdown } from 'react-bootstrap'

const UniverSityData = () => {
       const [uniName, setUniName] = useState("");
       const [program, setProgram] = useState("");
       const [students, setStudents] = useState("");
       const [programBTn1, setProgramBTn1] = useState("");
       const [programBTn2, setProgramBTn2] = useState("");
       const [programBTn3, setProgramBTn3] = useState("");
       const [proBtn, setProBtn] = useState(false);
       const [courseBtn, setCourseBtn] = useState(false);
       const [hideData, setHideData] = useState(false)

       const data = [
          {
             uni: {
                name: ["COMSATS", "NUST", "Virtual University"],
    
                COMSATS: {
                   program: [`Programs : BSSE,   BSCS,    BSIT`],
                   students: {
                      BSSEStudents: [`BSSE Students : Zeeshan, Haider, Talha`],
                      BSCSStudents: [`BSCS Students : Wahab, Saqib, Talam`],
                      BSITStudents: [`BSIT Students : Tuheed, Izgar, Noor`],
                   },
                },
                NUST: {
                   program: [`programs : BSCE,  BSEE,  PHD`],
                   nustStudents: {
                      BSCEStudents: [`BSCE Students : Farman , Abdul, Waheed`],
                      BSEEStudents: [`BSEE Students : Asad , Khan, Sarwat`],
                      phdStudents: [`PHD Students : Zeshan , Habib, Anayat`],
                   },
                },
                Fast: {
                   program: [`Fast University : Networking,  Arts, Animation`],
                   fastStudents: {
                      NetworkingStudents: [`Networking Students : Zeeshan, Shafi, Talha`],
                      ArtsStudents: [`Arts Students : Haidar , Fayyas, Ghayas`],
                      Animation: [`Animation Students : Asad, Zeeshan, Taimoor`],
                   },
                },
             },
          },
       ];
    
       //    let getData = data.map((val, ind) => {
       //       return val.uni.name;
       //    });
       let clickHandler = (e) => {
          setUniName(e.target.id);
    
          setProBtn(true);
              setHideData(false)
              setStudents("")
         
       };
    
       let showProgram = () => {
           setHideData(true)
          data.map((val) => {
             setCourseBtn(true);
             if (uniName == "COMSATS") {
                setProgram(val.uni.COMSATS.program);
                setProgramBTn1("BSSE");
                setProgramBTn2("BSCS");
                setProgramBTn3("BSIT");
             } else if (uniName == "NUST") {
                setProgram(val.uni.NUST.program);
                setProgramBTn1("BSCE");
                setProgramBTn2("BSEE");
                setProgramBTn3("PHD");
             } else if (uniName == "FAST") {
                setProgram(val.uni.Fast.program);
                setProgramBTn1("Networking");
                setProgramBTn2("Arts");
                setProgramBTn3("Animation");
             } else {
             }
          });

       };
    
       let showStudents = (e) => {
          let btnVal = e.target.value;
    
          data.map((val) => {
             if (btnVal == "BSSE") {
                setStudents(val.uni.COMSATS.students.BSSEStudents);
             } else if (e.target.value == "BSCS") {
                setStudents(val.uni.COMSATS.students.BSCSStudents);
             } else if (e.target.value == "BSIT") {
                setStudents(val.uni.COMSATS.students.BSITStudents);
             } else if (e.target.value == "BSCE") {
                setStudents(val.uni.NUST.nustStudents.BSCEStudents);
             } else if (e.target.value == "BSEE") {
                setStudents(val.uni.NUST.nustStudents.BSEEStudents);
             } else if (e.target.value == "PHD") {
                setStudents(val.uni.NUST.nustStudents.phdStudents);
             } else if (e.target.value == "Networking") {
                setStudents(
                   val.uni.Fast.fastStudents
                      .NetworkingStudents
                );
             } else if (e.target.value == "Arts") {
                setStudents(
                   val.uni.Fast.fastStudents.ArtsStudents
                );
             } else if (e.target.value == "Animation") {
                setStudents(
                   val.uni.Fast.fastStudents.Animation
                );
             } else {
             }
          });
       };
       return (
          <>
          
          <div className='text-center'>
              <h4>University Name 👇</h4>
             <Nav className='d-flex justify-content-center'>
            
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Universities"
          menuVariant="dark"
        >
             <button
                className="btn btn-primary mt-5 mx-3 px-4"
                id="COMSATS"
                onClick={clickHandler}
             >
             COMSATS
             </button>
             <button
                className="btn btn-primary mt-5 mx-3 px-4"
                id="NUST"
                onClick={clickHandler}
             >
                NUST
             </button>
             <button
                className="btn btn-primary mt-5 mx-3 px-4"
                id="FAST"
                onClick={clickHandler}
             >
                FAST
             </button>   </NavDropdown>
        
        </Nav>
    
             <h1 className="mt-5 mx-4"> {uniName}</h1>
             {proBtn ? (
                <h3 className="mt-5 mx-4">
                   Click to choose Program
                   <br/> <br/>
                   <button
                      className="btn btn-primary  mx-3 px-4"
                      id="program"
                      onClick={showProgram}
                   >
                      program
                   </button>
                </h3>
             ) : (
                ""
             )}
             {hideData ? (
               <div>
             {courseBtn ? (
                <div>
                   <button
                      className="btn btn-primary mt-5 mx-3 px-4"
                      value={programBTn1}
                      onClick={showStudents}
                   >
                      {programBTn1}
                   </button>
                   <button
                      className="btn btn-primary mt-5 mx-3 px-4"
                      value={programBTn2}
                      onClick={showStudents}
                   >
                      {programBTn2}
                   </button>
                   <button
                      className="btn btn-primary mt-5 mx-3 px-4"
                      value={programBTn3}
                      onClick={showStudents}
                   >
                      {programBTn3}
                   </button>
                   <h3 className="mt-5 mx-4">{students}</h3>
                </div>
             ) : (
                ""
             )}
             </div>): ""}
             
             </div>
          </>
       );
}

export default UniverSityData
