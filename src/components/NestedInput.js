import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../App.css";
import { Alert } from "@mui/material";

const NestedInput = () => {
  const uniData = [
    {
      id: Math.random(),
      uniName: "",
      departments: [
        {
          department: "",
          students: [
            {
              id: "",
              name: "",
              subjects: [],
            },
          ],
        },
      ],
    },
  ];
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [uniInput, setUniInput] = useState("");
  const [deptInput, setDeptInput] = useState("");
  const [deptNameUpdate, setDeptNameUpdate] = useState(null);
  const [uniSubmit, setUniSubmit] = useState([]);
  const [uniNameUpdate, setUniNameUpdate] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleBtn2, setToggleBtn2] = useState(false);
  const [toggleBtn3, setToggleBtn3] = useState(false);

  const [status2Index, setStatus2Index] = useState();
  const [mainIndex, setMainIndex] = useState();
  const [indexUni, setIndexUni] = useState();
  const [indexDept, setIndexDept] = useState();
  const [indexStd, setIndexStd] = useState();
  const [nestedInput, setNestedInput] = useState("");
  const [nestedUpdate, setNestedUpdate] = useState("");

  /*         University Name OnChange Handler       */
  const UniNameOnChangeHandler = (event) => {
    setUniInput(event.target.value);
  };
  /*         Department Name OnChange Handler       */
  const DeptNameOnChangeHandler = (event, deptIndex) => {
    setDeptInput(event.target.value);
    setIndexUni(deptIndex);
  };
  /*         NestedInput Name OnChange Handler       */
  const NestedOnChangeHandler = (event, mainIndex, deptIndex) => {
    setNestedInput(event.target.value);
    setIndexUni(mainIndex);
    setIndexDept(deptIndex);
  };

  /*         University Name Add Handler       */
  const UniInputAddHandler = () => {
    if (!uniInput) {
      alert("Enter University Name");
    } else if (uniInput && toggleBtn) {
      //  Update Uni Name if required
      setUniSubmit((uniSubmit[uniNameUpdate].uniName = uniInput));

      setToggleBtn(false);
      setUniNameUpdate(null);
      setUniInput("");
    } //Initially Add Uni Name by push() method
    else
      uniSubmit.push({
        id: Math.random(),
        uniName: uniInput,
        departments: [],
      });
    setUniSubmit([...uniSubmit]);
    setClick(true);
    setUniInput("");
  };

  /*         Departments Name Add Handler       */
  const AddDepartmentsHandler = (index) => {
    if (!deptInput) {
      alert("Enter Program before proceed.");
    } else if (toggleBtn2) {
      uniSubmit.map((val, i) => {
        if (i === indexUni) {
          val.departments.map((val2, i2) => {
            if (i2 === indexDept) {
              val2.department = deptInput;
            }
          });
        }
      });
      setUniSubmit([...uniSubmit]);

      setDeptInput("");
       setToggleBtn2(false);
    }
    else {
    uniSubmit[index].departments.push({
      // Add Dept Name very first time by push() method
      id: Math.random(),
      department: deptInput,
      students: [],
    });
    setUniSubmit([...uniSubmit]);
    setDeptInput("");
 } };

  /*             Delete University Name           */
  const UniNameDeleteHandler = (deleteIndex) => {
    setUniSubmit(uniSubmit.filter((val, index) => deleteIndex !== index));
  };

  /*             Update University Name          */
  const UniNameUpdateHandler = (updateId) => {
    uniSubmit.filter((val, index) => {
      if (updateId === index) setUniInput(val.uniName);
    });

    setUniNameUpdate(updateId);
    setToggleBtn(true);
  };

  /*             Update Dept Name          */
  const deptNameUpdateHandler = (mainIndex, deptIndex) => {
    let updateDept = uniSubmit[mainIndex].departments[deptIndex];

    setIndexUni(mainIndex);
    setIndexDept(deptIndex);
    setDeptInput(updateDept.department);
    //  setDeptNameUpdate(deptIndex)
    // uniSubmit.map((val, i) =>
    //   val.departments.map((val2, i2) => {

    setToggleBtn2(true);

    //   }),
    // );
  };

  /*             Delete Dept Name           */
  const deptNameDeleteHandler = (mainIndex, deptIndex) => {
    uniSubmit[mainIndex].departments.splice(deptIndex, 1);
    setUniSubmit([...uniSubmit]);
  };

  /*            Add Nested (students) Names           */
  const AddNestedItems = (mainIndex, deptIndex) => {
    if (!nestedInput) {
      alert("Enter Student Name to proceed.");
    } else if (toggleBtn3) {
      uniSubmit.map((val, i) => {
        if (i === indexUni) {
          val.departments.map((val2, i2) => {
            if (i2 === indexDept) {
              val2.students.map((val3, i3) => {
                if (i3 === nestedUpdate) {
                  val3.name = nestedInput;
                }
              });
            }
          });
        }
      });
      setUniSubmit([...uniSubmit]);
      setToggleBtn3(false);
    } else {
      uniSubmit[mainIndex].departments[deptIndex].students.push({
        id: Math.random(),
        name: nestedInput,
        subjects: [],
      });
      setUniSubmit([...uniSubmit]);
    }
    setNestedInput("");
  };

  const DeleteNestedItem = (mIndex, dIndex, nestedIndex) => {
    uniSubmit[mIndex].departments[dIndex].students.splice(nestedIndex, 1);
    setUniSubmit([...uniSubmit]);
  };
  const UpdateNestedItem = (mIndex, dIndex, nestedIndex) => {
    let updateNested =
      uniSubmit[mIndex].departments[dIndex].students[nestedIndex];

    setNestedInput(updateNested.name);
    setNestedUpdate(nestedIndex);
    setIndexUni(mIndex);
    setIndexDept(dIndex);
    setToggleBtn3(true);
  };

  return (
    <div>
      <div className="text-center">
        <label className="fw-bold text-success">✍️Add a University✍️</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="University Name"
          value={uniInput}
          onChange={UniNameOnChangeHandler}
        />
        {!toggleBtn ? (
          <Button
            onClick={UniInputAddHandler}
            className="btn-sm btn-style btn-light">
            <AddIcon className="text-success bg" />
          </Button>
        ) : (
          <Button
            onClick={UniInputAddHandler}
            className="btn-sm btn-style btn-light text-success fw-bolder">
            Save
          </Button>
        )}
      </div>
      {/* {click2 ? <input type='text' placeholder = 'Add Program' /> : ""} */}
      {
         uniSubmit.map((items, index) => {
            let mainIndex = index;
            return (
              <div key={index}>
                <div className="d-flex my-2">
                  <ul className="list-group list-group-flush">
                    <li className="fw-bolder fs-5 border-0 border-bottom border-primary">
                      {items.uniName}
                    </li>
                  </ul>

                  <Button
                    className="btn-sm mx-4 btn-light text-success"
                    onClick={() => UniNameUpdateHandler(index)}>
                    <EditIcon />
                  </Button>
                  <Button
                    className="btn-sm btn-light text-danger"
                    onClick={() => UniNameDeleteHandler(index)}>
                    <DeleteForeverIcon />
                  </Button>
                </div>
                <input
                  className="my-2"
                  type="text"
                  placeholder={`Add ${items.uniName} Programs`}
                  value={indexUni === index ? deptInput : ""}
                  //   name={items.departments.map((val) => val.department)}
                  onChange={(event) =>
                    DeptNameOnChangeHandler(event, mainIndex)
                  }
                />
                {toggleBtn2 && indexUni === index ? (
                  <Button
                    onClick={() => AddDepartmentsHandler(index)}
                    className="btn-sm btn-style">
                    Save
                  </Button>
                ) : (
                  <Button
                    className="btn-sm btn-style btn-light"
                    onClick={() => AddDepartmentsHandler(index)}>
                    <AddIcon className="text-success" />
                  </Button>
                )}
                {items.departments.map((dept, index) => {
                  let deptIndex = index;
                  return (
                    <div key={index}>
                      <ul className="d-flex my-3">
                        <li>{dept.department}</li>{" "}
                        <input
                          className="mx-3"
                          type="text"
                          placeholder={`Add ${dept.department} Students`}
                          value={
                            indexUni === mainIndex && indexDept === deptIndex
                              ? nestedInput
                              : ""
                          }
                          onChange={(event) =>
                            NestedOnChangeHandler(event, mainIndex, deptIndex)
                          }
                        />
                        {toggleBtn3 &&
                        indexUni === mainIndex &&
                        indexDept === deptIndex ? (
                          <Button
                            className="btn-sm btn-style btn-light"
                            onClick={() =>
                              AddNestedItems(mainIndex, deptIndex)
                            }>
                            SAVE
                          </Button>
                        ) : (
                          <Button
                            className="btn-sm btn-style btn-light"
                            onClick={() =>
                              AddNestedItems(mainIndex, deptIndex)
                            }>
                            <AddIcon className="text-info" />
                          </Button>
                        )}
                        <Button
                          className="btn-sm mx-4 btn-light btn-light"
                          onClick={() =>
                            deptNameUpdateHandler(mainIndex, deptIndex)
                          }>
                          <EditIcon className="text-primary" />
                        </Button>
                        <Button
                          className="btn-sm btn-light text-warning"
                          onClick={() =>
                            deptNameDeleteHandler(mainIndex, deptIndex)
                          }>
                          <DeleteForeverIcon />
                        </Button>
                      </ul>

                      {dept.students.map((std, index) => {
                        let nestedIndex = index;
                        return (
                          <ul
                            key={index}
                            className="mx-4 text-secondary d-flex my-4">
                            <li>{std.name}</li>

                            <Button
                              className="btn-sm mx-4 btn-light text-info"
                              onClick={() =>
                                UpdateNestedItem(
                                  mainIndex,
                                  deptIndex,
                                  nestedIndex,
                                )
                              }>
                              <EditIcon />
                            </Button>
                            <Button
                              className="btn-sm btn-light"
                              onClick={() =>
                                DeleteNestedItem(
                                  mainIndex,
                                  deptIndex,
                                  nestedIndex,
                                )
                              }>
                              <DeleteForeverIcon />
                            </Button>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })
        }
    </div>
  );
};

export default NestedInput;
