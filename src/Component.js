import { useState } from 'react'
import { Data } from './Data'
import 'bootstrap/dist/css/bootstrap.css'
export default function ToDo(){
     const [item,setItem]=useState('')
     const [list,setlist]=useState([])
     const [edit,setedit]=useState(false)
     const [edititm,setedtitm]=useState('')
     const save=(e)=>{
        setItem(e.target.value);
     }
     const saveItm=()=>{
             if(item !=="" && !edit ){ 
                 setlist((pre)=>{
                 return [...pre,item]
              })}else{
                list.splice(edititm,1,item)
                setlist(list)
                setedit(false)
              }
              setItem('')
      }
      const deleteItm=(d)=>{
          setlist((pre)=>{
            return pre.filter((elements,index)=>
               {
                return index!==d} )} );
      }
      const editItm=(id,itm)=>{
        setItem(itm)
        setedtitm(id)
         setedit(true)
 }
      
    return(
        <div className='container-fluid main'>
            <div className='container'>
                 <div className='row heading'>
                    <div className='col-12'>ToDo List</div>
                 </div>
                 <div className='row Inputs'>
                     <div className='col-10 '>
                         <input type='text' id='item' value={item} placeholder='Enter item...' onChange={save}/>
                     </div>
                     <div className='col-1 save'>
                         <span id='pls' onClick={saveItm}>+</span> 
                     </div>
                 </div>
                 <div className='outr'>
                 {
                    list.map((itm,index)=>{ 
                        return <Data 
                         deleteItm={deleteItm} 
                         editItm={editItm}
                         itm={itm}
                         key={index}
                         id={index}
                         />})
                 }
                
                 </div>
            </div>
        </div>
    )
}