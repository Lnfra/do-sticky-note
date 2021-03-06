function displayAll() {
  var allStickyNote = window.localStorage;

  if (allStickyNote.length > 0) {
    for (var eachStickyNote in allStickyNote) {
      if (eachStickyNote.includes("id")) {
        // console.log(eachStickyNote);
        var note = JSON.parse(localStorage.getItem(eachStickyNote));
        // console.log(parsedNote);
        var stickyNote = document.createElement("div");
        stickyNote.className = "note";
        stickyNote.id = eachStickyNote.substring(8, 12);
        // console.log(stickyNote.id);
        stickyNote.innerHTML =
          "<h5>" +
          "Sticky Id: " +
          stickyNote.id +
          "</h5>" +
          `<textarea class="title" id="title${eachStickyNote}">` +
          note["title"] +
          "</textarea>" +
          `<textarea class="content" id="content${eachStickyNote}">` +
          note["content"] +
          "</textarea>" +
          "<br/>" +
          `<button id="${eachStickyNote}">` +
          "Delete" +
          "</button>" +
          `<button id="edit${eachStickyNote}">` +
          "Edit" +
          "</button>";

        document.getElementById("displayAllStickyNote").appendChild(stickyNote);

        deleteStickyNote(eachStickyNote);
        // editStickyNote(eachStickyNote);
      }
    }
  }
}

function addStickyNote() {
  var date = new Date();
  var stickyNoteDate = date.toDateString();
  var stickyNoteTitle = document.getElementById("newStickyNoteTitle").value;
  var stickyNoteContent = document.getElementById("newStickyNoteContent").value;
  var stickyNoteId = "id" + Date.parse(date);

  var stickyNote = {
    "date": stickyNoteDate,
    "title": stickyNoteTitle,
    "content": stickyNoteContent
  };

  localStorage.setItem(stickyNoteId, JSON.stringify(stickyNote));
}

function deleteStickyNote(noteId) {
  document.getElementById(`${noteId}`).addEventListener("click", function() {
    localStorage.removeItem(noteId);
    document.location.reload(true);
  });
}

// function editStickyNote(noteId) {
//   console.log(noteId)
//   console.log(`edit${noteId}`)
//   document.getElementById(`edit${nodeId}`).addEventListener("click", function() {
//     var editNoteTitle = document.getElementById(`title${noteId}`).value;
//     var editNoteContent = document.getElementById(`content${noteId}`).value;
//     var editStickyNote = {
//       "title": editNoteTitle,
//       "content": editNoteContent
//     };
//     localStorage[noteId] = JSON.stringify(editStickyNote);
//   });
// }

window.onload = function() {
  displayAll();
  document.getElementById("displayAllStickyNote").style.display = "flex";
  document
    .getElementById("addStickyNote")
    .addEventListener("click", addStickyNote);
};
