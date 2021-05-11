import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Card = () => {
    const [inputData,setInputData,description,setDescription,items,setItems] = useContext(UserContext)
    console.log(items);
    const deletedItems = (id)=>{
      const deleteItems = items.filter((elem,index)=>{
        return index !== id;
      })
      setItems(deleteItems)
    }
    const deleteAll =()=>{
      setItems([]);
    }
    return (
<div>
<button className="btn btn-primary removeAll" onClick={deleteAll}>
  <span>Check List</span>
</button>
<div className="row">
      
      {
            items.map((elem,index)=>{
                return (
                   <div key={index} className="col-md-4">
           <div  className="card-wrapper pr-4 mt-3">
             <div className = "card-top"></div>
               <div  className = "task-holder">
                   <span className = "card-header">{elem.Name}</span>
                   <p className = "mt-3">{elem.Description}</p>
                   <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                     <button className="btn btn-primary" onClick={() =>deletedItems(index)}>Delete</button>
                   </div>
           </div>
       
       </div>
      
       </div>
                )
               })
           }
 
      </div>
</div>
 
    );
};

export default Card;