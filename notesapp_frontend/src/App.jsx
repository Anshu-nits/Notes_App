import { useEffect, useState } from "react";
import { getAllNotes } from "./api/notesApi";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await getAllNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

 return (
  <div style={styles.app}>
    <div style={styles.container}>
      <h1 style={styles.heading}>Notes App</h1>

      <CreateNote onNoteAdded={fetchNotes} />
      <SearchBar setNotes={setNotes} />
      <NotesList notes={notes} />
    </div>
  </div>
);
}

export default App;

const styles = {
 app: {
  minHeight: "100vh",
  width: "100%",
  background: "#0f172a",
  fontFamily: "'Inter', sans-serif",
  color: "#e5e7eb",
},
  heading: {
  color: "#f8fafc",
  marginBottom: "20px",
 },
 container: {
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "30px",
  boxSizing: "border-box",
},
};