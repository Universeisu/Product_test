import './App.css'
import { AddProduct, EditProduct, ProductDetail, Productlist } from './Pages'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  
    return (
      <div className="container">
        <h1>React JS CRUD Operations</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Productlist />}></Route>
            <Route path="/Product/create" element={<AddProduct />}></Route>
            <Route path="/Product/edit/:id" element={<EditProduct />}></Route>
            <Route path="/Product/detail/:id" element={<ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App
