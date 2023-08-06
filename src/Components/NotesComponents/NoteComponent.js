import React from 'react'
import Note from '../Notes/Note'
import "./NoteContainer.css"
export default function NoteComponent(props) {

  
  return (
    <div className="note-container">
        <h2>Notes</h2>
        <div className="note-container_notes">
        {
            (props.note.length > 0 ?
            props.note.map((item)=>{
                return <Note key={item.id} note={item} 
                DeleteNote={props.DeleteNote}
                updateText={props.updateText}/>
            }) 
            : <h3>No Notes available</h3>
            )
        }
      </div>
    </div>
  )
}
