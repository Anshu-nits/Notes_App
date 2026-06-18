export default function NotesList({ notes }) {
  return (
    <div style={styles.grid}>
      {notes.map((note) => (
        <div
          key={note.id}
          style={styles.card}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
          }}
        >
          <h3 style={styles.title}>{note.title}</h3>

          <p style={styles.content}>{note.content}</p>

          <div style={styles.tagBox}>
            <small style={styles.tags}>Tags: {note.tags}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
  background: "#1e293b",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #334155",
  boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
  transition: "0.2s ease",
},

  title: {
  color: "#f8fafc",
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px",
  letterSpacing: "0.2px",
},

  content: {
  color: "#cbd5e1",
  fontSize: "14px",
  lineHeight: "1.6",
  marginBottom: "12px",
},

  tags: {
  color: "#94a3b8",
  fontSize: "12px",
  background: "#0f172a",
  padding: "4px 8px",
  borderRadius: "6px",
  display: "inline-block",
},
};