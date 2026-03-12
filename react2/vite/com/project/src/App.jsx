import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MemberOne from "./pages/MemberOne";
import MemberTwo from "./pages/MemberTwo";
import MemberThree from "./pages/MemberThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/member1" element={<MemberOne />} />
          <Route path="/member2" element={<MemberTwo />} />
          <Route path="/member3" element={<MemberThree />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;