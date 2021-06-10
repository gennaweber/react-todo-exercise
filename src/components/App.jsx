import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
// import noteFile from "../notes";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState(
    []);

  function createNote(event, tempNote) {
    setNotes((preNotes) => {
      return [...preNotes, tempNote]
    });
    event.preventDefault();
  };


  function deleteNote(deletedIndex){
    setNotes((previousNotes) => {
      return previousNotes.filter((note, index) => {
        return index !== deletedIndex;
      });
    })
  };

  return (
    <div>
      <Heading />
      <CreateArea 
        createNote={createNote}
      />
        {notes.map( (note, index) => 
            (<Note 
              deleteNote={deleteNote}
              index={index}
              key={note.id}
              title={note.title}
              content={note.content}
            />)
          ) 
        }
      <Footer />
    </div>
  );
}

export default App;