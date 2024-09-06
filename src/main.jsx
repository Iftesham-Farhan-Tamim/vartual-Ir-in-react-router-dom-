import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HeroSection from './components/HeroSection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Workflow from './components/Workflow.jsx'
import About from './components/About.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path='/' element={<Navbar />}> */}
      <Route path='' element={<HeroSection />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="features" element={<FeatureSection />} />
      <Route path="workflow" element={<Workflow />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="footer" element={<Footer />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
