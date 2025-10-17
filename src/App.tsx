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
import SS309Page from './pages/SS309Page';
import SS310Page from './pages/SS310Page';
import SS310sPage from './pages/SS310sPage';
import SS321Page from './pages/SS321Page';
import SS347Page from './pages/SS347Page';
import SS316TiPage from './pages/SS316TiPage';
import SS17_4PhPage from './pages/SS17_4PhPage';
import SS15_5PhPage from './pages/SS15_5PhPage';
import HasteloyC276Page from './pages/HasteloyC276Page';
import HasteloyC22Page from './pages/HasteloyC22Page';
import HasteloyB2Page from './pages/HasteloyB2Page';
import Monel400Page from './pages/Monel400Page';
import MonelK500Page from './pages/MonelK500Page';
import ScrollTop from './components/ScrollTop';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <ScrollTop />
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
        <Route path="/materials/ss-309" element={<SS309Page />} />
        <Route path="/materials/ss-310" element={<SS310Page />} />
        <Route path="/materials/ss-310s" element={<SS310sPage />} />
        <Route path="/materials/ss-321" element={<SS321Page />} />
        <Route path="/materials/ss-347" element={<SS347Page />} />
        <Route path="/materials/ss-316ti" element={<SS316TiPage />} />
        <Route path="/materials/ss-17-4-ph" element={<SS17_4PhPage />} />
        <Route path="/materials/ss-15-5ph" element={<SS15_5PhPage />} />
        <Route path="/materials/hastelloy-c-276" element={<HasteloyC276Page />} />
        <Route path="/materials/hastelloy-c22" element={<HasteloyC22Page />} />
        <Route path="/materials/hastelloy-b-2" element={<HasteloyB2Page />} />
        <Route path="/materials/monel-alloy-400" element={<Monel400Page />} />
        <Route path="/materials/monel-alloy-k-500" element={<MonelK500Page />} />
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
