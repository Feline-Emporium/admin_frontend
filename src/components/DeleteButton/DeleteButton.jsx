import React from "react";
import "./deleteButton.css";

function DeleteButton(props) {
  const { uid } = props;

  async function handleOnClick() {
    if (confirm("Delete User?")) {
      await fetch(`http://localhost:3002/users/delete/${uid}`, {
        method: "DELETE",
      })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div>
      <button className="deleteButton" onClick={() => handleOnClick()}>
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
