import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GenerateTable.css";

import DeleteButton from "../DeleteButton";

function GenerateTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    await axios
      .get("http://localhost:3002/users/all")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
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
              <td>{user.metadata.lastSignIn}</td>
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

export default GenerateTable;
