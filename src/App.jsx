 
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
 const [users , setUsers] = useState([]);

 useEffect(() =>{
  fetch('http://localhost:5000/users')
  .then (res => res.json())
  .then(data => setUsers(data));
 }, [])

   const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {name, email, password}
      console.log(user);
      fetch('http://localhost:5000/users', ),{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
      body: JSON.stringify(user)
      }
      .then(res => res.json())
      .then(data =>{
        console.log(data); 
      })
       }

  return (
    <>
       <h1>Users maangement systems</h1>
       <h1>Numbers of users : {users.length} </h1>
    
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='type your name' id="" /> <br />
        <input type="email" name="email" placeholder='type your email' id="" /> <br />
        <input type="password" name="password" placeholder='type your password' id="" /> <br />
        <button className='btn'>add user</button>
      </form>
       
      <div>
        {
          users.map(user => <p> {user.id} {user.name} {user.email} </p>)
        }
      </div>
      
    </>
  )
}

export default App
