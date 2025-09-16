import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const CodeLittle = lazy(() => import("./pages/CodeLittle"));
const CodeJunior = lazy(() => import("./pages/CodeJunior"));
const CodeMater = lazy(() => import("./pages/CodeMater"));

export default function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/little-coder" element={<CodeLittle />} />
          <Route path="/code-junior" element={<CodeJunior />} />
          <Route path="/code-master" element={<CodeMater />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
