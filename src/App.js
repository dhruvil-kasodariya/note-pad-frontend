import "./App.css";
import Auth from "./routes/Auth/auth.routes";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.router";
import AddEditNote from "./routes/AddEditNote/addEditNote.routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addNote" element={<AddEditNote />} />
      </Routes>
    </div>
  );
}

export default App;
