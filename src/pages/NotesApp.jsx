import { use } from "react";
import { useState } from "react"
import './NotesApp.css'

// Component for displaying and managing a single note
function Note({ note, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(note.text);

    //enter edit mode
    function handleEdit() {
        setIsEditing(true);
    }

    //save edits and exit exit mode
    function handleSave(){
        onEdit(note.id, editedText);
        setIsEditing(false);
    }

    return (
        <>
        <div className="note">
            <h3>{note.title}</h3>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        
            {isEditing ? (
            <>
                <textarea
                    rows="4"
                    cols="50"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
            </>
            ) : (
                <p>{note.text}</p>
            )}
        {!isEditing && <button onClick={handleEdit}>Edit</button>}
        </div>
        </>
    )
} 

// main component for notes app
export default function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState( { title: '', text: '' } )

    // add new note to the array
    function addNote() {
        if (newNote.title && newNote.text) {
            const newId = Date.now().toString();
            setNotes([...notes, { ...newNote, id:newId}]);
            setNewNote({ title:'', text: '' })
        }
    }

    // delete note by id
    function deleteNote(id) {
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
    }

    // edit the text of an existing note by id
    function editNote(id, newText) {
        const updateNotes = notes.map((note) => 
        note.id === id ? {...note, text: newText } : note
    );
    setNotes(updateNotes);
    }

    return (
        <>
        <h1>Notes App</h1>
        <div className="container">
            <div className="note-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value})}
                />

                <textarea
                    placeholder="text"
                    value={newNote.text}
                    onChange={(e) => setNewNote({ ...newNote, text: e.target.value})}
                />
                <button onClick={addNote}>Add Note</button>
            </div>

            <div className="note-list">
                {notes.map((note) => (
                <Note key={note.id} note={note} onDelete={deleteNote} onEdit={editNote} />
                ))}
            </div>
            </div>
        </>
    )
}