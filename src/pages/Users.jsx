import { useEffect, useState } from "react";
import "./users.css";
import User from "../components/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="users">
      <h1>Users Page</h1>
      <p>Here is a list of users:</p>
      <ul className="users__list">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
