import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import MaterialsPage from './pages/MaterialsPage';
import Inconel600Page from './pages/Inconel600Page';
import Inconel601Page from './pages/Inconel601Page';
import InconelX750Page from './pages/InconelX750Page';
import Inconel625Page from './pages/Inconel625Page';
import Inconel690Page from './pages/Inconel690Page';
import Inconel718Page from './pages/Inconel718Page';
import NutsPage from './pages/NutsPage';
import BoltsPage from './pages/BoltsPage';
import WashersPage from './pages/WashersPage';
import ScrewsPage from './pages/ScrewsPage';
import StudsPage from './pages/StudsPage';
import RoundBarPage from './pages/RoundBarPage';
import PipePage from './pages/PipePage';
import PipeFittingsPage from './pages/PipeFittingsPage';
import BoltDimensionsPage from './pages/BoltDimensionsPage';
import NutDimensionsPage from './pages/NutDimensionsPage';
import WasherDimensionsPage from './pages/WasherDimensionsPage';
import WeightChartPage from './pages/WeightChartPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/bolts" element={<BoltsPage />} />
        <Route path="/products/nuts" element={<NutsPage />} />
        <Route path="/products/washers" element={<WashersPage />} />
        <Route path="/products/screws" element={<ScrewsPage />} />
        <Route path="/products/studs" element={<StudsPage />} />
        <Route path="/products/round-bar" element={<RoundBarPage />} />
        <Route path="/products/pipe" element={<PipePage />} />
        <Route path="/products/pipe-fittings" element={<PipeFittingsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/materials/inconel-600" element={<Inconel600Page />} />
        <Route path="/materials/inconel-alloy-601" element={<Inconel601Page />} />
        <Route path="/materials/inconel-alloy-x-750" element={<InconelX750Page />} />
        <Route path="/materials/inconel-alloy-625" element={<Inconel625Page />} />
        <Route path="/materials/inconel-alloy-690" element={<Inconel690Page />} />
        <Route path="/materials/inconel-alloy-718" element={<Inconel718Page />} />
        <Route path="/technical/bolt-dimensions" element={<BoltDimensionsPage />} />
        <Route path="/technical/nut-dimensions" element={<NutDimensionsPage />} />
        <Route path="/technical/washer-dimensions" element={<WasherDimensionsPage />} />
        <Route path="/technical/weight-chart" element={<WeightChartPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
