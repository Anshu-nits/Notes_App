import { useState } from "react";
import { createNote } from "../api/notesApi";

export default function CreateNote({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title,
      content,
      tags,
    };

    await createNote(note);

    setTitle("");
    setContent("");
    setTags("");

    onNoteAdded(); // refresh list
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Note</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
        />

        <input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Note
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
  marginBottom: "25px",
  padding: "20px",
  background: "#1e293b",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  width: "fit-content",
 },
  
 title: {
  color: "#f8fafc",
  marginBottom: "10px",
},

  input: {
  display: "block",
  margin: "10px 0",
  padding: "10px",
  width: "320px",
  background: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#e5e7eb",
  outline: "none",
 },

  textarea: {
  display: "block",
  margin: "10px 0",
  padding: "10px",
  width: "320px",
  height: "90px",
  background: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#e5e7eb",
  outline: "none",
  },

  button: {
  padding: "10px 15px",
  cursor: "pointer",
  background: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "500",
},
};