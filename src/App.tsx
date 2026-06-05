import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Scenarios from './pages/Scenarios'
import About from './pages/About'
import ImagesAdmin from './pages/admin/ImagesAdmin'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/images" element={<ImagesAdmin />} />
      </Route>
    </Routes>
  )
}
