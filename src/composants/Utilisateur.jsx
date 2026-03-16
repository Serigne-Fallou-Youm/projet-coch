import { useState, useEffect } from "react"

function Utilisateurs() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="users">
      {users.map((user) => (
        <div className="user-carte" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Utilisateurs