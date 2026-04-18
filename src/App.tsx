import { Routes, Route } from 'react-router'
import HomePage from './pages/Home'
import PortfolioPage from './pages/Portfolio'
import DemosPage from './pages/Demos'
import DocsPage from './pages/Docs'
import MainLayout from './components/layouts/MainLayout'
import LoadingScreen from './components/atoms/LoadingScreen'

export default function App() {
  return (
    <LoadingScreen minDuration={1000}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/demos" element={<DemosPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Route>
      </Routes>
    </LoadingScreen>
  )
}