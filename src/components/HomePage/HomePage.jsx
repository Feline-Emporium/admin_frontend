import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h2>OneStop CatShop Admin</h2>
      <Link to="/users">
        <Button variant="contained">Users</Button>
      </Link>
      <br />
      <br />
      <Link to="/posts">
        <Button variant="contained">Posts</Button>
      </Link>
    </div>
  );
}

export default App;
