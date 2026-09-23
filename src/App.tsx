import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import Complete from "./pages/Complete";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
      <BrowserRouter>
        <h1>React-Router-FormNavigationApp</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
