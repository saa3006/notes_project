import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API = 'http://127.0.0.1:8000/api/notes/'

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editId, setEditId] = useState(null)

  const loadNotes = () => {
    axios.get(API)
      .then((response) => {
        setNotes(response.data)
      })
  }

  useEffect(() => {
    loadNotes()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { title, content }
    const request = editId ? axios.put(`${API}${editId}/`, data) : axios.post(API, data)
    request.then(() => {
      setTitle('')
      setContent('')
      setEditId(null)
      loadNotes()
    })
  }

  const handleEdit = (note) => {
    setTitle(note.title)
    setContent(note.content)
    setEditId(note.id)
  }

  const handleDelete = (id) => {
    axios.delete(`${API}${id}/`)
      .then(() => {
        loadNotes()
      })
  }

  return (
    <div className="App">
      <h1>Notes App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Update Note' : 'Add Note'}</button>
      </form>
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleEdit(note)}>Edit</button>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default App
