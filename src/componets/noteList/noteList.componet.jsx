import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Note from "../note/note.componet";
import SpeedDialComponet from "../speedDial/speedDial.componet";

const actions = [{ icon: <NoteAddIcon />, name: "Add New", route: "addNote" }];

const NoteList = ({ notes }) => {
  return (
    <>
      {notes.map((note, index) => {
        return (
          <div key={note._id}>
            <Note note={note} index={((index + 1) % 2) + 1} />
          </div>
        );
      })}
      <SpeedDialComponet actions={actions} />
    </>
  );
};

export default NoteList;
