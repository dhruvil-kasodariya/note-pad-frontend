import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllNotesByUser } from "../../api/note.api";
import Footer from "../../componets/footer/footer.componet";
import Navbar from "../../componets/navbar/navbar.componet";
import NoteList from "../../componets/noteList/noteList.componet";
import { selectCurrentUser } from "../../store/user/user.selecter";
const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const tempFun = async () => {
      const temp = await getAllNotesByUser(
        currentUser._id,
        currentUser.accessToken
      );
      setNotes(temp);
    };
    tempFun();
  }, [currentUser]);
  console.log(notes);
  return (
    <div>
      <Navbar />
      {notes.length && <NoteList notes={notes} />}

      {/*      <h1>{currentUser.username}</h1>
      <h3>{currentUser.useremail}</h3>
  <span>{currentUser.accessToken ? "yes" : "no"}</span>*/}
      <Footer />
    </div>
  );
};
export default Home;
