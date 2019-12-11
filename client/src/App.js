import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getLogin(){
      const loginData = {
        email: "rrmanuel1123@gmail.com",
        password: "ironmanelmejor"
      }
      console.log('json string',JSON.stringify(loginData))
      const response = await fetch('/users/login', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });
      const myjson = await response.json()
      setUser(myjson.user)
      console.log('response', myjson)
    }
    getLogin()
  }, [])

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      {user && <h1>{user.name}</h1>}
    </div>
  );
}

export default App
