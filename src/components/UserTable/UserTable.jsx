import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserTable.css";

import DeleteButton from "../DeleteButton";

function UserTable() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("JWT_TOKEN"));

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    } else {
      getUsers();
    }
  }, []);

  async function getUsers() {
    await axios
      .post(
        "http://localhost:3002/users/all",
        {
          JWT_TOKEN: token,
        },
        {
          headers: {
            JWT_TOKEN: token,
          },
        }
      )
      .then((res) => {
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

export default UserTable;
