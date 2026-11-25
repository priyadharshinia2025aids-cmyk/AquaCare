import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/customer_login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;