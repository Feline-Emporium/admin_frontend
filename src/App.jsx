import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import PostsPage from "./components/PostsPage";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/*   <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
