import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import AboutPage from "./components/pages/AboutPage/AboutPage.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import ContactsPage from "./components/pages/ContactsPage/ContactsPage.jsx";
import DeliveryPage from "./components/pages/DeliveryPage/DeliveryPage.jsx";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage.jsx";
import SingleProductPage from "./components/pages/SingleProductPage/SingleProductPage.jsx";
import BasketPage from "./components/pages/BasketPage/BasketPage.jsx";

function App() {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket])
  return (
    <>
      <Header basket={basket} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route
          path="/catalog"
          element={<CatalogPage basket={basket} setBasket={setBasket} />}
        />
        <Route path="/catalog/single-product" element={<SingleProductPage basket={basket} setBasket={setBasket} />} />
        <Route
          path="/basket"
          element={<BasketPage basket={basket} setBasket={setBasket} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
