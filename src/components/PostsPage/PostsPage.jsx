import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostsPage.scss";

function PostsPage() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCatList();
  }, []);

  async function getCatList() {
    await axios
      .get("http://localhost:3001/post/getall", {
        headers: {
          authorization: "admin",
        },
      })
      .then((response) => {
        setCats(response.data);
      });
  }
  const rows = [];
  for (let i = 0; i < cats.length; i += 3) {
    rows.push(
      <div className="cat-row" key={i}>
        {cats.slice(i, i + 3).map((cat, j) => (
          <div className="cat-card" key={i + j}>
            <div className="cat-details">
              <h3>{cat.name}</h3>
              <p>Race: {cat.breed}</p>
              <p>Gender: {cat.gender}</p>
              <p>Age: {cat.age}</p>
              <p>{cat.description}</p>
              <p>{`DKK: ${cat.price}`}</p>
              <p>{`Sold: ${cat.sold}`}</p>
              <p>{`User: ${cat.userId}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className="cat-list-page">{rows}</div>;
}

export default PostsPage;
