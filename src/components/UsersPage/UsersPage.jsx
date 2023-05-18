import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UsersPage.css";

import DeleteButton from "../DeleteButton";
import BackButton from "../BackButton";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("JWT_TOKEN"));

  useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    await axios
      .post("http://localhost:3002/users/all", {
        headers: {
          JWT_TOKEN: token,
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <h1>Users</h1>
      <BackButton />
      <table>
        <thead>
          <tr>
            <th>uid</th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>Last Sign In</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.email}</td>
              <td>{user.metadata.creationTime}</td>
              <td>{user.metadata.lastSignInTime}</td>
              <td>
                <DeleteButton uid={user.uid} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
