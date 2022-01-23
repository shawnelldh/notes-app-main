import React from 'react'
import notes from '../assetts/data'
import ListItem from '../components/ListItem'


const NotesPage = () => {
  return (
           <div>

           {notes.map(note =>  (
              <ListItem note={note}/>
            
            ))}
             
             </div>

  )
}

export default NotesPage