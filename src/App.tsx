import { Route, Routes } from "react-router-dom";
import NavBar from  "./components/NavBar"
import HomePage from "./pages/HomePage";
import CodeLittle from "./pages/CodeLittle";
import CodeJunior from "./pages/CodeJunior";
import CodeMater from "./pages/CodeMater";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/little-coder" element={<CodeLittle />} />
        <Route path="/code-junior" element={<CodeJunior />} />
        <Route path="/code-master" element={<CodeMater />} />
      </Routes>
    </>
  );
}
