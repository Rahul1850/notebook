import NoteComponent from "./Components/NotesComponents/NoteComponent";
import "./App.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
function App() {
  document.title="Make a Note || NotesMaker"
  const [note,setNote]=useState(
   JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const addnote=(color)=>{
     const a=[...note]
     a.unshift({
      text:"",
      id:Date.now() +""+Math.floor(Math.random()*78),
      time:Date.now(),
      color:color
     })
     setNote(a);
  }

  const deleteNote=(id)=>{
    const temp=[...note]
    const index=temp.findIndex(item=>item.id===id)
    if (index<0) return
    temp.splice(index,1)
    setNote(temp)
  }

  const updateText=(text,id)=>{
    const temp=[...note]
    const index=temp.findIndex(item=>item.id===id)
    if (index<0) return
    temp[index].text=text
    setNote(temp)
  }

  useEffect(()=>{
    localStorage.setItem("notes-app", JSON.stringify(note))
  })
 
  return (
    <div className="App">
      <Sidebar addNote={addnote}/>
      <NoteComponent note={note} DeleteNote={deleteNote}
      updateText={updateText}/>
    </div>
  );
}

export default App;
