import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Products } from "./Composant/Product";
import { NewProduct } from "./Composant/NewProduct";
import { EditProduct } from "./Composant/EditProduct";
import { ConnectUserProvider } from "./Composant/context/connectUserProvider";
// import Orders from "./Composant/Orders";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <ConnectUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/add" element={<NewProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            {/* <Route paths="/orders" element={<Orders />} /> */}
          </Routes>
        </BrowserRouter>
      </ConnectUserProvider>
    </Layout>
  );
}

export default App;
