import { Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/admin.route.js";
import { configureAppStore } from "./redux/store.js";
import { Provider } from "react-redux";
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Vegetable from './container/Vegetable';
import TodayDeals from './container/TodayDeals';
import Aboutus from './container/Aboutus';
import Contactus from './container/Contactus';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import VerifyOTP from './components/VerifyOTP';
import ResetPassword from './components/ResetPassword';
import VerifyEmail from './components/VerifyEmail';
import MyProfile from './container/MyProfile';
import Addcart from './container/Addcart';
import Checkout from './container/Checkout';
import ProductDetails from './container/ProductDetails';
import Faqs from './container/Faqs';
import Termsandcondition from './container/Termsandcondition';
import Orderdetails from './container/Orderdetails';
import Thankspopup from './container/Thankspopup';
import HomeMain from "./components/HomeMain.js";

function App() {
  const { store, persistor } = configureAppStore();

  return (
    <Provider store={store}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeMain />} />
            <Route path="/homemain" element={<Home />} />
            <Route path="/vegetable" element={<HomeMain />} />
            <Route path="/today-deals" element={<TodayDeals />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/cart" element={<Addcart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms" element={<Termsandcondition />} />
            <Route path="/orderdetails" element={<Orderdetails />} />
            <Route path="/order-confirmation" element={<Thankspopup />} />
          </Route>

          {/* Admin Routes */}
          {AdminRoute}
        </Routes>
    </Provider>
  );
}

export default App;
