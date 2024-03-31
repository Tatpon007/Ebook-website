import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './footer/footer';
import ComicNovels from './components/ComicNovels';
import Support from './components/Support';
import Sciences from './components/Sciences';
import Business from './components/Business';
import Home from './components/Home';
import Product from './Product/product';
import User from './components/User';
import EDIT from './components/EDIT';
import Payment from './components/Payment';
import PaymentEDIT from './components/PaymentEDIT';
import Shipping from './components/Shipping';
import ShippingEDIT from './components/ShippingEDIT';
import OrderHi from './components/OrderHi';
import CustomerE from './components/CustomerE';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/CustomerE" element={<CustomerE />} />
          <Route path="/OrderHi" element={<OrderHi />} />
          <Route path="/ShippingEDIT" element={<ShippingEDIT />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/PaymentEDIT" element={<PaymentEDIT />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/EDIT" element={<EDIT />} />
          <Route path="/User" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Menu />} />
          <Route path="/ComicNovels" element={<ComicNovels />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Sciences" element={<Sciences />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
