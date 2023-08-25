import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import EditProduct from "./components/EditProduct";
import NewProduct from "./components/NewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/edit?/:pro" element={<EditProduct />}></Route>
          <Route path="/new" element={<NewProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
