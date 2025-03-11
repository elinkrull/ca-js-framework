import './App.css'
import HomePage from './pageComponents/HomePage';

export default function App() {

  return (
    <div className="app-container">
		<HomePage />
    </div>
  )
}


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import HomePage from "./pageComponents/HomePage";
// import ContactPage from "./pageComponents/ContactPage";
// import CheckoutPage from "./pageComponents/CheckoutPage";
// import CheckoutSuccessPage from "./pageComponents/CheckoutSuccessPage";

// export default function App() {

//   return (
// 	<Router>
//     <div className="app-container">
// 	<Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
//         </Routes>
//     </div>
// 	</Router>
//   )
// };

