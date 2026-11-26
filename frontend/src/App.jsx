import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "./pages/auth/CustomerLogin";
import EmployeeRegister from "./pages/auth/EmployeeRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/EmployeeRegister" element={<EmployeeRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
