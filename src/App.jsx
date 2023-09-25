import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Products } from "./Composant/Product";
import { NewProduct } from "./Composant/NewProduct";
import { EditProduct } from "./Composant/EditProduct";
import { ConnectUserProvider } from "./Composant/context/connectUserProvider";
// import Orders from "./Composant/Orders";
import Layout from "./Layout";
import {Orders} from "./Composant/orders.jsx";
import {OrderDetail} from "./Composant/OrderDetail.jsx";

function App() {
  return (
    <Layout>
      <ConnectUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/add" element={<NewProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/order/:id" element={<OrderDetail/>} />
            {/* <Route paths="/orders" element={<Orders />} /> */}
          </Routes>
        </BrowserRouter>
      </ConnectUserProvider>
    </Layout>
  );
}

export default App;
