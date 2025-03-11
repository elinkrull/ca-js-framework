import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pageComponents/HomePage';
import ContactPage from "./pageComponents/ContactPage";

export default function App() {
  return (
    <Router className="app-container">
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/Contact" element={<ContactPage />} />
		</Routes>
    </Router>
  )
}
