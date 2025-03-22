import { Routes, Route } from "react-router";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
