import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const Modal = () => {
    const [inputData,setInputData,description,setDescription,items,setItems] = useContext(UserContext)

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setInputData(value)
        }else{
            setDescription(value)
        }
    }

    const addItem = (e) => {
        e.preventDefault()

       if(!inputData && !description){

       }else{  
        let taskObj = {}
        taskObj["Name"] = inputData
        taskObj["Description"] = description
        setItems([...items,taskObj])
        setInputData('')
        setDescription('')
       }
    }
    // add localStorage items
    useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(items))
    },[items])

    return (
        <>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Create TodoList
</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Create Task</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body">
    <div className="">
        <div className="form-group">
            <label>Task Name</label>
            <input type="text" className="form-control" name = "taskName"
            value={inputData}
            onChange={handleChange}
            />
        </div>
        <div className="from-group">
            <label >Description</label>
            <textarea className = "form-control" name="description" rows="5" name = "description"
            value={description}
             onChange={handleChange}>

             </textarea>
        </div>
    </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary"
      onClick={addItem}
      >Create</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Modal;