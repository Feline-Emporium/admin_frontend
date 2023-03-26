import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        {/*   <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
