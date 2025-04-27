import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
