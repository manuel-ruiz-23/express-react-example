import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleLogin(){
    console.log('datos',form)
    async function getLogin(){
      const loginData = {
        email: form.email,
        password: form.password
      }
      try {
        console.log('json string',JSON.stringify(loginData))
        const response = await fetch('/users/login', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData)
        });
        const myjson = await response.json()
        setUser(myjson.user)
        console.log('response', myjson)

      } catch(error) {
        console.log('error', error.message)
      }
    }
    getLogin()
  }

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      {user && <h1>{user.name}</h1>}
      email
      <input name="email" value={form.email} onChange={handleChange}/>
      password
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      <button onClick={handleLogin}>
        login
      </button>
    </div>
  );
}

export default App
