import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Products } from "./Composant/Product";
import { NewProduct } from "./Composant/NewProduct";
import { EditProduct } from "./Composant/EditProduct";
// import Orders from "./Composant/Orders";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<NewProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          {/* <Route paths="/orders" element={<Orders />} /> */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
