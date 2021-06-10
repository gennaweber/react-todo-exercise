import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

    const [isActive, setIsActive] = useState(false);

    function activate (){
        setIsActive(true);
    }

    const [tempNote, setTempNote] = useState({
      title: "",
      content: "",
      id: uuidv4(),
    });

    function trackNote(event){
        const {value, name} = event.target;

        setTempNote((preTempNote) => {
            return {
                ...preTempNote,
                [name] : value
            }
        });
    };

    return (
      <div>
        <form className="create-note">
        {isActive &&
          <input
            onChange={trackNote}
            name="title"
            value={tempNote.title}
            placeholder="Title"
          />
        }
          <textarea
            onChange={trackNote}
            onClick={activate}
            name="content"
            value={tempNote.content}
            placeholder="Take a note..."
            rows= {isActive ? "3" : "1"}
          />
          <Zoom in={isActive}>
            <Fab
                onClick={(event) => {
                props.createNote(event, tempNote);
                setTempNote({ title: "", content: "", id: uuidv4() });
                }}
            > <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
}

export default CreateArea;
