import { useState } from "react";
import { searchByTag, getAllNotes } from "../api/notesApi";

export default function SearchBar({ setNotes }) {
  const [tag, setTag] = useState("");

  const handleSearch = async () => {
    if (!tag.trim()) return;

    const res = await searchByTag(tag);
    setNotes(res.data);
  };

  const handleReset = async () => {
    setTag("");

    const res = await getAllNotes();
    setNotes(res.data);
  };

  return (
    <div style={styles.wrapper}>
      <input
        placeholder="Search by tag (e.g. java, spring)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleSearch} style={styles.searchBtn}>
        Search
      </button>

      <button onClick={handleReset} style={styles.resetBtn}>
        Reset
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "20px",
  padding: "12px",
  background: "#1e293b",
  borderRadius: "10px",
},

  input: {
  padding: "10px 12px",
  width: "260px",
  background: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#e5e7eb",
  outline: "none",
},

 searchBtn: {
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#6366f1",
  color: "white",
},

resetBtn: {
  padding: "10px 14px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#475569",
  color: "white",
},
};