import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import HelpCenter from "./pages/NestedFooterPages/HelpCenter";
import Aircover from "./pages/NestedFooterPages/Aircover";
import GethelpwithSafetyIssue from "./pages/NestedFooterPages/GethelpwithSafetyIssue";
import Login from "./pages/Login";
import ScrolltoTop from "./Scrolltotop";
import AntiDiscrimination from "./pages/NestedFooterPages/AntiDiscrimination";
import Disabilitysupport from "./pages/NestedFooterPages/Disabilitysupport";

function App() {
  return (
    <BrowserRouter>
    <ScrolltoTop />
      <div className="scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Footer link setup */}
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/safetyissue" element={<GethelpwithSafetyIssue />} />
          <Route path="/aircover" element={<Aircover />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/anti_discrimination" element={<AntiDiscrimination />} />
          <Route path="/disablity_supports" element={<Disabilitysupport />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
