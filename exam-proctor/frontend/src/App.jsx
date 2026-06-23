import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Verification from "./pages/verification";
import Exam from "./pages/exam";
import Admin from "./pages/admin";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Login />} />
<Route path="/verification" element={<Verification />} />
<Route path="/exam" element={<Exam />} />
<Route path="/admin" element={<Admin />} /> </Routes> </BrowserRouter>
);
}

export default App;
