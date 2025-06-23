const form = document.getElementById("noteForm");
const board = document.getElementById("notesBoard");

let notes = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("noteTitle").value.trim();
  const message = document.getElementById("noteMessage").value.trim();
  const priority = document.getElementById("notePriority").value;

  if (title && message) {
    const note = {
      id: Date.now(),
      title,
      message,
      priority: priority || "none",
      createdAt: new Date()
    };

    notes.push(note);
    displayNotes();
    form.reset();
  }
});

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  displayNotes();
}

function displayNotes() {
  board.innerHTML = "";
  notes.forEach(note => {
    const card = document.createElement("div");
    card.className = `note-card ${note.priority.toLowerCase()}`;
    card.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${note.id})">&times;</button>
      <h3>${note.title}</h3>
      <p>${note.message}</p>
      <small>Priority: ${note.priority}</small>
    `;
    board.appendChild(card);
  });
}
