import React from 'react'
import Delete from "../../img/delete.png.png"
import "../Notes/NotesCss.css"

let timer=500,timeout
export default function Note(props) {
  const formatDate=(value)=>{
    if(!value) return ""

    const date=new Date(value);
    const mounthName=["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    let hrs=date.getHours()
    let amPm=hrs>12?"PM":"AM"
    hrs=hrs?hrs:"12"
    hrs=hrs>12?hrs-12:hrs

    let min=date.getMinutes()
    min=min<10?"0"+min:min

    let day=date.getDate()
    let month=date.getMonth()
    month=mounthName[month]

    return `${hrs}:${min} ${amPm} ${day} ${month}`

  };

  const debounce=(func)=>{
      clearTimeout(timeout)
      timeout=setTimeout(func,timer)
  }

  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }
  return (
    <div className="note"  style={{backgroundColor:`${props.note.color}`}}>
      
      <textarea className="note_text" defaultValue={props.note.text} onChange={(event)=>updateText(event.target.value,props.note.id)}/>
      <div className="footer">
      <p>{formatDate(props.note.time)}</p>
      <img src={Delete} alt='Delete' 
      onClick={()=>{props.DeleteNote(props.note.id)}}/>
      </div>
    </div>
  )
}
