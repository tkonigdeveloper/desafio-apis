import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
 import Home from "./components/Home";
// import Cart from "./components/Cart";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        { <Home/> }
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <Cart /> */}
        <Pizza />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
