import React from "react";

export const Data=(props)=>{
   
    return (
            <div className='row list' >
               <div className='bi col-2'>
                   <i className="bi bi-x" onClick={()=>{props.deleteItm(props.id)}}></i>   
               </div>
               <div className='col-9'>
                  {props.itm}
               </div>
               <div className='bi col-2 edit'>
                   <i className="bi bi-pencil-square " onClick={()=>{props.editItm(props.id,props.itm)}}></i>   
               </div>
            </div>
    )
}