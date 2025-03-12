import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pageComponents/HomePage';
import ContactPage from "./pageComponents/ContactPage";
import ProductPage from "./pageComponents/ProductPage";
import CheckoutSuccessPage from "./pageComponents/CheckoutSuccessPage";

export default function App() {
  return (
    <Router className="app-container">
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/Contact" element={<ContactPage />} />
			<Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
		</Routes>
    </Router>
  )
}
