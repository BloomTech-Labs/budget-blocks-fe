import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [form, setForm] = useState({ password: "pass", username: "name" })
  const [loading, setLoading] = useState(false)

  useEffect(() => { console.log("componentupdated, newstate:", form) })
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setTimeout(()=>setLoading(false), 2000)
  }

  return (
    
    <div className="App">
    {loading ? <h1>{"LOADING"}</h1> : null}
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name={"username"} value={form.username} />
          <input onChange={handleChange} name={"password"} value={form.password} />
          <input type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
