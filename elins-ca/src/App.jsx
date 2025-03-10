
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pageComponents/HomePage'

export default function App() {

  return (
    <div className="app-container">
		<Header />
		<HomePage />
		<Footer />
    </div>
  )
}

