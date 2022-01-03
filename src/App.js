import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Pages/ProductList/ProductList";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route>Not Found !</Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
