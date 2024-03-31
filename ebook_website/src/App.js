import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './footer/footer';
import ComicNovels from './components/ComicNovels';
import Support from './components/Support';
import Sciences from './components/Sciences';
import Business from './components/Business';
import Home from './components/Home';
import Product from './Products/Product';
import User from './components/User';
import EDIT from './components/EDIT';
import Payment from './components/Payment';
import PaymentEDIT from './components/PaymentEDIT';
import Shipping from './components/Shipping';
import ShippingEDIT from './components/ShippingEDIT';
import OrderHi from './components/OrderHi';
import CustomerE from './components/CustomerE';
import UserM from './components/Backend/UserM';
import Stock from './components/Backend/Stock';
import OrderM from './components/Backend/OrderM';
import CustomerM from './components/Backend/CustomerM';
import Shopcart from './Products/Shopcart';
import Payment2 from './Products/Payment2';
import Status from './Products/Status';
import Statusfail from './Products/Statusfail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Statusfail" element={<Statusfail />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Payment2" element={<Payment2 />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Shopcart" element={<Shopcart />} />
          <Route path="/CustomerM" element={<CustomerM />} />
          <Route path="/OrderM" element={<OrderM />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/UserM" element={<UserM />} />
          <Route path="/CustomerE" element={<CustomerE />} />
          <Route path="/OrderHi" element={<OrderHi />} />
          <Route path="/ShippingEDIT" element={<ShippingEDIT />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/PaymentEDIT" element={<PaymentEDIT />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/EDIT" element={<EDIT />} />
          <Route path="/User" element={<User />} />
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
