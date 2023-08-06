import React, { useState } from 'react'
import plus from "../../img/plus.jpg"
import "./Sidebar.css"
export default function Sidebar(props) {
    const[listOpen,setListOpen]=useState(false);
  
    const color=["#fe9b72","#fec971","#00dcfe", "#b693fd", "#e4ee91"]
  return (
    <div >
        <div className="sidebar">
            <img src={plus} alt='add' onClick={()=>{setListOpen(!listOpen)}}></img>   
            <ul className={`${listOpen ? "sidebar_list_active" : "sidebar_list"}`}>
                {
                    color.map((item,index)=>{
                        return <li key={index} className='sidebar_list_item' style={{backgroundColor:`${item}`}} 
                         onClick={()=>props.addNote(item)}></li>
                        
                    })
                }
            </ul>
        </div>
    </div>
  )
}
