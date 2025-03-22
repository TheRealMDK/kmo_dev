import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/cart/Cart";
import Create from "./components/cart/crud/Add";
import Edit from "./components/cart/crud/Edit";
import Delete from "./components/cart/crud/Delete";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="cart">
          <Route index element={<Cart />}></Route>
          <Route path="create" element={<Create />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="delete/:id" element={<Delete />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
